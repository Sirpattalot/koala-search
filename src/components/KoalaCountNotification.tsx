import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

type KoalaCountNotificationProps = {
  koalaResultCount: number
}

function KoalaCountNotification({ koalaResultCount }: KoalaCountNotificationProps) {

  const [notificationVisible, setNotificationVisible] = useState<boolean>(false);

  useEffect( () => {
    if (koalaResultCount >= 0) {
      setNotificationVisible(true);
    }
  }, [koalaResultCount])

  const handleNotificationClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationVisible(false);
  }

  return(
    <>
    { notificationVisible &&
      <Snackbar open={notificationVisible} autoHideDuration={4000} onClose={handleNotificationClose}>
        <Alert onClose={handleNotificationClose} severity={ koalaResultCount > 0 ? 'info' : 'warning'} sx={{ width: '100%' }}>
          { koalaResultCount || 'No' } location{ koalaResultCount === 1 ? '' : 's'} found.
        </Alert>
      </Snackbar>    
    }
    </>
  )
}

export default KoalaCountNotification;