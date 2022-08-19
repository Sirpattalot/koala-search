import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

type LocationErrorNotificationProps = {
  hasCurrentLocation: number;
};

const LocationErrorNotification = ({
  hasCurrentLocation,
}: LocationErrorNotificationProps) => {
  const [notificationVisible, setNotificationVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (hasCurrentLocation <= 0) {
      setNotificationVisible(true);
    }
  }, [hasCurrentLocation]);

  const handleNotificationClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationVisible(false);
  };

  return (
    <>
      {notificationVisible && (
        <Snackbar
          open={notificationVisible}
          autoHideDuration={4000}
          onClose={handleNotificationClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <Alert
            onClose={handleNotificationClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            Location not supported or allowed.
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default LocationErrorNotification;
