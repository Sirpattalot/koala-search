// used for filtering and reducing the original GeoJSON object. Simplified polygon to a single point, and removed all probablity = 0, and no data (p=999)

//   const getPointFromPolygon = (coordArray) => {
//     const topLeftPoint = coordArray[0];
//     const bottomRightPoint = coordArray[2];

//     const midPoint = [ (topLeftPoint[0] + bottomRightPoint[0]) / 2,  (topLeftPoint[1] + bottomRightPoint[1]) / 2]

//     return midPoint;
//   }

// export const filteredKoalaData = {
//   ...koalaData,
//   features: koalaData.features.filter( (feature) => feature.properties.p <= 1 && features.properties.p > 0 ) 
//   .map( (feature) => {
//     let properties = { p: feature.properties.p }
//     let geometry = { type: "Point", coordinates: getPointFromPolygon(feature.geometry.coordinates[0]) }
//     return { 
//       ...feature,
//       properties,
//       geometry
//     }
//   })
// }

export const koalaData: GeoJSON.FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8810596585369,
                    -30.448970930738298
                ]
            },
            "properties": {
                "p": 0.503225806452
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.98497750152575,
                    -30.443851839555155
                ]
            },
            "properties": {
                "p": 0.69040247678
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.88692226108708,
                    -30.539012845056288
                ]
            },
            "properties": {
                "p": 0.405405405405
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8752087088356,
                    -30.358934298433727
                ]
            },
            "properties": {
                "p": 0.568965517241
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.77713016272236,
                    -30.454000466546844
                ]
            },
            "properties": {
                "p": 0.155555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.99094324577732,
                    -30.5338883455068
                ]
            },
            "properties": {
                "p": 0.314285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.97902361379437,
                    -30.353820617174396
                ]
            },
            "properties": {
                "p": 0.689795918367
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7828895887614,
                    -30.544047694511576
                ]
            },
            "properties": {
                "p": 0.318181818182
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.77138218572264,
                    -30.363958519064703
                ]
            },
            "properties": {
                "p": 0.102272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.08888348801761,
                    -30.438643209179617
                ]
            },
            "properties": {
                "p": 0.854545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.89279655129567,
                    -30.62905982396194
                ]
            },
            "properties": {
                "p": 0.255813953488
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.99692088196196,
                    -30.623929917622995
                ]
            },
            "properties": {
                "p": 0.103686635945
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.86936937731133,
                    -30.268903165307396
                ]
            },
            "properties": {
                "p": 0.74
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.08282669752856,
                    -30.348617491457436
                ]
            },
            "properties": {
                "p": 0.482921083628
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.67318921789098,
                    -30.458940431081537
                ]
            },
            "properties": {
                "p": 0.625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.78866049804583,
                    -30.63409998551403
                ]
            },
            "properties": {
                "p": 0.741935483871
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9730815473108,
                    -30.263794895509882
                ]
            },
            "properties": {
                "p": 0.28431372549
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6788454332132,
                    -30.548992877962124
                ]
            },
            "properties": {
                "p": 0.515151515152
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.76564562369197,
                    -30.273922069249263
                ]
            },
            "properties": {
                "p": 0.710526315789
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.66754424766316,
                    -30.368893263179523
                ]
            },
            "properties": {
                "p": 0.289473684211
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.07678193121842,
                    -30.25859727601575
                ]
            },
            "properties": {
                "p": 0.522580645161
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6845129272313,
                    -30.639050386357574
                ]
            },
            "properties": {
                "p": 0.516853932584
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.89868256411108,
                    -30.719111649770532
                ]
            },
            "properties": {
                "p": 0.123287671233
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.66191048906143,
                    -30.278851591458924
                ]
            },
            "properties": {
                "p": 0.133333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.1866177571074,
                    -30.343324937736202
                ]
            },
            "properties": {
                "p": 0.324324324324
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0029104456333,
                    -30.713976338238588
                ]
            },
            "properties": {
                "p": 0.0114942528736
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.86354162942965,
                    -30.178877748261435
                ]
            },
            "properties": {
                "p": 0.423841059603
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.79444292491775,
                    -30.724157121850467
                ]
            },
            "properties": {
                "p": 0.225806451613
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.56923702798744,
                    -30.463790808726255
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.96715126694232,
                    -30.17377489144409
                ]
            },
            "properties": {
                "p": 0.329608938547
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.57478999899138,
                    -30.553848379780653
                ]
            },
            "properties": {
                "p": 0.171875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.75992044269486,
                    -30.183891334021748
                ]
            },
            "properties": {
                "p": 0.664670658683
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5636950979997,
                    -30.373738515173084
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.18047032670106,
                    -30.25331032326664
                ]
            },
            "properties": {
                "p": 0.198630136986
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.07074915335687,
                    -30.16858277971719
                ]
            },
            "properties": {
                "p": 0.310924369748
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.69019173368073,
                    -30.72911273854534
                ]
            },
            "properties": {
                "p": 0.150943396226
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5803540440079,
                    -30.643911010854175
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65628790874996,
                    -30.188815632859903
                ]
            },
            "properties": {
                "p": 0.189189189189
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.90458033462085,
                    -30.809168104540593
                ]
            },
            "properties": {
                "p": 0.0609756097561
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.00891197248683,
                    -30.804027389431376
                ]
            },
            "properties": {
                "p": 0.0294117647059
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.80023690385627,
                    -30.81421888556024
                ]
            },
            "properties": {
                "p": 0.210144927536
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8577254307927,
                    -30.088858263933048
                ]
            },
            "properties": {
                "p": 0.171875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.961232737695,
                    -30.083760821594737
                ]
            },
            "properties": {
                "p": 0.112676056338
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.1743350869355,
                    -30.163301429510483
                ]
            },
            "properties": {
                "p": 0.0869565217391
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.47072349077882,
                    -30.558614184623195
                ]
            },
            "properties": {
                "p": 0.0185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.75420660893016,
                    -30.093866530038632
                ]
            },
            "properties": {
                "p": 0.226086956522
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.585929196165,
                    -30.733978484205828
                ]
            },
            "properties": {
                "p": 0.18
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5526442297405,
                    -30.19365062919325
                ]
            },
            "properties": {
                "p": 0.346405228758
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.69588188643138,
                    -30.819179716546135
                ]
            },
            "properties": {
                "p": 0.0983606557377
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0647283283547,
                    -30.078574219159478
                ]
            },
            "properties": {
                "p": 0.0470588235294
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.47618405366597,
                    -30.648681843648976
                ]
            },
            "properties": {
                "p": 0.02
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65067647352504,
                    -30.098785604057806
                ]
            },
            "properties": {
                "p": 0.272058823529
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.45440688787008,
                    -30.288442428588912
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.91048989805276,
                    -30.8992289700756
                ]
            },
            "properties": {
                "p": 0.0426356589147
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.16821200162696,
                    -30.07329847304522
                ]
            },
            "properties": {
                "p": 0.0466101694915
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0149254983604,
                    -30.894082853024365
                ]
            },
            "properties": {
                "p": 0.0452488687783
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8060424694782,
                    -30.904285058427867
                ]
            },
            "properties": {
                "p": 0.50406504065
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4816555182708,
                    -30.738754343466223
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.95532592471324,
                    -29.99375290231258
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54713522612778,
                    -30.103615470419143
                ]
            },
            "properties": {
                "p": 0.125850340136
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.44898960794325,
                    -30.198396307721577
                ]
            },
            "properties": {
                "p": 0.00952380952381
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.74850408873027,
                    -30.003847873689644
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.36664611338995,
                    -30.563290277429125
                ]
            },
            "properties": {
                "p": 0.0285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.119349063691,
                    -30.8888467235135
                ]
            },
            "properties": {
                "p": 0.0818181818182
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7015834194884,
                    -30.90925110212573
                ]
            },
            "properties": {
                "p": 0.27
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.37200316162802,
                    -30.653362869670733
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.64507615031388,
                    -30.008761721461276
                ]
            },
            "properties": {
                "p": 0.229166666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.35063882718836,
                    -30.293103713169533
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4435830684196,
                    -30.108356113833448
                ]
            },
            "properties": {
                "p": 0.107569721116
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.59711295507395,
                    -30.914127085497896
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3773709060311,
                    -30.743440301244604
                ]
            },
            "properties": {
                "p": 0.0833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9164112897751,
                    -30.98929402792624
                ]
            },
            "properties": {
                "p": 0.0188679245283
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54163713284734,
                    -30.013586456447428
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.81185965653856,
                    -30.994355421984963
                ]
            },
            "properties": {
                "p": 0.235632183908
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8461275443405,
                    -29.90883795864202
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.25731502927357,
                    -30.477804268405286
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.94943079327896,
                    -29.90375134967973
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7428128485604,
                    -29.913835581095782
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.26255807176818,
                    -30.567876643421165
                ]
            },
            "properties": {
                "p": 0.005
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.70729636699284,
                    -30.99932667679711
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.05272239527386,
                    -29.898575770321248
                ]
            },
            "properties": {
                "p": 0.0161290322581
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.63948690617457,
                    -29.918744201210288
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.43818723741848,
                    -30.01832206336995
                ]
            },
            "properties": {
                "p": 0.0394265232975
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.34002020220993,
                    -30.113007519293912
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.53614991755052,
                    -29.923563803436675
                ]
            },
            "properties": {
                "p": 0.0169491525424
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9223445452977,
                    -31.07936305939215
                ]
            },
            "properties": {
                "p": 0.217391304348
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.02698869123563,
                    -31.07420614343961
                ]
            },
            "properties": {
                "p": 0.177777777778
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8176884999314,
                    -31.08442975751232
                ]
            },
            "properties": {
                "p": 0.237885462555
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.84034578840638,
                    -29.81883756961215
                ]
            },
            "properties": {
                "p": 0.386666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3881386116139,
                    -30.92360881000039
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.943547308811,
                    -29.813756379507467
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.73713285501822,
                    -29.823829868107403
                ]
            },
            "properties": {
                "p": 0.0606060606061
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.14819045474675,
                    -30.39222429973636
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.33472666524273,
                    -30.022968527232912
                ]
            },
            "properties": {
                "p": 0.0512820512821
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7130207632223,
                    -31.089406221822436
                ]
            },
            "properties": {
                "p": 0.229508196721
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0467372167169,
                    -29.808586313894132
                ]
            },
            "properties": {
                "p": 0.0564516129032
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4328020831851,
                    -29.928294372507956
                ]
            },
            "properties": {
                "p": 0.0153846153846
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.16360949480017,
                    -30.662455442528017
                ]
            },
            "properties": {
                "p": 0.00245098039216
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.63390870829502,
                    -29.82873325917417
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6083415433963,
                    -31.09429243662937
                ]
            },
            "properties": {
                "p": 0.138888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.14991531274433,
                    -29.803327389154152
                ]
            },
            "properties": {
                "p": 0.0113636363636
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.53067354801624,
                    -29.8335477272749
                ]
            },
            "properties": {
                "p": 0.0357142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.28363514722264,
                    -30.928214521208766
                ]
            },
            "properties": {
                "p": 0.05
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.92828970027247,
                    -31.169435845524266
                ]
            },
            "properties": {
                "p": 0.563025210084
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.82352903469044,
                    -31.1745078460418
                ]
            },
            "properties": {
                "p": 0.38785046729
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.25308139765139,
                    -29.79797962195116
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.834575445478,
                    -29.728843977161358
                ]
            },
            "properties": {
                "p": 0.585858585859
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9376754368644,
                    -29.723768207334555
                ]
            },
            "properties": {
                "p": 0.363247863248
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7314640748329,
                    -29.73383095030225
                ]
            },
            "properties": {
                "p": 0.266666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.71875664259156,
                    -31.17948951821501
                ]
            },
            "properties": {
                "p": 0.2625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.42742757409007,
                    -29.838273257153702
                ]
            },
            "properties": {
                "p": 0.00537634408602
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.13286315215095,
                    -30.122042557737828
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.04076385006135,
                    -29.718603656910677
                ]
            },
            "properties": {
                "p": 0.0697674418605
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6283415239925,
                    -29.738729110949688
                ]
            },
            "properties": {
                "p": 0.157894736842
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.61397273282319,
                    -31.184380846339813
                ]
            },
            "properties": {
                "p": 0.0508474576271
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.32417098655094,
                    -29.84290983383643
                ]
            },
            "properties": {
                "p": 0.241379310345
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9342467904942,
                    -31.259512167126424
                ]
            },
            "properties": {
                "p": 0.604651162791
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5091775143712,
                    -31.18918181499695
                ]
            },
            "properties": {
                "p": 0.093023255814
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.24690514684045,
                    -29.708008280033575
                ]
            },
            "properties": {
                "p": 0.00980392156863
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.82938129598978,
                    -31.264589468358512
                ]
            },
            "properties": {
                "p": 0.328042328042
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.82881648183042,
                    -29.638857396573478
                ]
            },
            "properties": {
                "p": 0.872852233677
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.02926937254085,
                    -30.126426162119742
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.93181514312974,
                    -29.633787048424914
                ]
            },
            "properties": {
                "p": 0.644444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.94529917943265,
                    -30.491010911075
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7258064748646,
                    -29.643839042983494
                ]
            },
            "properties": {
                "p": 0.222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.72450403965348,
                    -31.269576346741303
                ]
            },
            "properties": {
                "p": 0.203389830508
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.12269551250014,
                    -29.941951732349903
                ]
            },
            "properties": {
                "p": 0.0266666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.40437119635772,
                    -31.193892409051863
                ]
            },
            "properties": {
                "p": 0.105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.61961523095636,
                    -31.274472786560025
                ]
            },
            "properties": {
                "p": 0.104838709677
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.13777763546892,
                    -29.6233803115015
                ]
            },
            "properties": {
                "p": 0.0114942528736
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.51471507950885,
                    -31.27927877238467
                ]
            },
            "properties": {
                "p": 0.157676348548
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9402158519012,
                    -31.349591804757743
                ]
            },
            "properties": {
                "p": 0.555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8352453191447,
                    -31.354674405002626
                ]
            },
            "properties": {
                "p": 0.157894736842
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.41671036542004,
                    -29.658251615229112
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.29955398803838,
                    -31.198512613654806
                ]
            },
            "properties": {
                "p": 0.015625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.11762677139026,
                    -29.85191606912567
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.82306886387124,
                    -29.54887804285576
                ]
            },
            "properties": {
                "p": 0.606557377049
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.92596639343247,
                    -29.54381311776614
                ]
            },
            "properties": {
                "p": 0.296296296296
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.73026298909943,
                    -31.35966648792309
                ]
            },
            "properties": {
                "p": 0.50495049505
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.72016002210387,
                    -29.55385436117785
                ]
            },
            "properties": {
                "p": 0.15671641791
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.01930630264303,
                    -29.946326021769607
                ]
            },
            "properties": {
                "p": 0.206896551724
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.8364542334579,
                    -30.405148248329915
                ]
            },
            "properties": {
                "p": 0.916666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.02885241301885,
                    -29.53865960197413
                ]
            },
            "properties": {
                "p": 0.222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.40980379505822,
                    -31.283994289070343
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.61724006603026,
                    -29.558742056948105
                ]
            },
            "properties": {
                "p": 0.0573770491803
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.97006207404382,
                    -30.941490877100733
                ]
            },
            "properties": {
                "p": 0.0103092783505
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6252690718627,
                    -31.364568037793518
                ]
            },
            "properties": {
                "p": 0.407407407407
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.92078163771748,
                    -30.040662662046223
                ]
            },
            "properties": {
                "p": 0.075
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.13172672499533,
                    -29.533417511825835
                ]
            },
            "properties": {
                "p": 0.674300254453
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.85579104979715,
                    -30.765521059909393
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.51430919367948,
                    -29.563541114663245
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.52026377767203,
                    -31.369379039173424
                ]
            },
            "properties": {
                "p": 0.378378378378
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.2345891318626,
                    -29.52808686394801
                ]
            },
            "properties": {
                "p": 0.0104166666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9750444194929,
                    -31.03160028009774
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.946196920576,
                    -31.439674538734476
                ]
            },
            "properties": {
                "p": 0.859810223447
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.84112113961217,
                    -31.44476243627159
                ]
            },
            "properties": {
                "p": 0.661354581673
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.81733255814015,
                    -29.45890613073704
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7372392023723,
                    -30.499366921348027
                ]
            },
            "properties": {
                "p": 0.897637795276
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7360335257601,
                    -31.449759722039285
                ]
            },
            "properties": {
                "p": 0.234042553191
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.71452468367085,
                    -29.463877119633562
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.74196508192207,
                    -30.589462073815945
                ]
            },
            "properties": {
                "p": 0.0859375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.73252272670334,
                    -30.409277035529882
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.41524731690228,
                    -31.37409947690739
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.02291427325622,
                    -29.44869863367728
                ]
            },
            "properties": {
                "p": 0.214285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.74670039348604,
                    -30.679562275316194
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.61170572764598,
                    -29.468759580984177
                ]
            },
            "properties": {
                "p": 0.0545454545455
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.72781562689357,
                    -30.319192633718444
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.630934289746,
                    -31.45466638030119
                ]
            },
            "properties": {
                "p": 0.388888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.19994866680594,
                    -31.293153855869832
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.1256877196539,
                    -29.44346215790126
                ]
            },
            "properties": {
                "p": 0.561403508772
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.98003675670907,
                    -31.121713642942566
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.50887588751561,
                    -29.473553499297026
                ]
            },
            "properties": {
                "p": 0.0131578947368
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.72311787503241,
                    -30.22911393300814
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.10751929793526,
                    -29.671865320048106
                ]
            },
            "properties": {
                "p": 0.08
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.31021990006343,
                    -31.37872933612529
                ]
            },
            "properties": {
                "p": 0.444444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.52582364243676,
                    -31.459482395606184
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.22844929600248,
                    -29.438137219353635
                ]
            },
            "properties": {
                "p": 0.242718446602
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.87039536454773,
                    -31.03584988026446
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2054530611423,
                    -29.57740630866035
                ]
            },
            "properties": {
                "p": 0.0047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.40603536085598,
                    -29.478258859361084
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9521900327463,
                    -31.529760149131988
                ]
            },
            "properties": {
                "p": 0.96511627907
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8470087929917,
                    -31.53485334222205
                ]
            },
            "properties": {
                "p": 0.682210708117
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4207017948375,
                    -31.464207752788575
                ]
            },
            "properties": {
                "p": 0.289855072464
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.33119880551635,
                    -29.432723834929398
                ]
            },
            "properties": {
                "p": 0.342342342342
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.81160753130803,
                    -29.368941874665772
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.74181568460628,
                    -31.539855829128122
                ]
            },
            "properties": {
                "p": 0.217142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.63319500552,
                    -30.50341036098266
                ]
            },
            "properties": {
                "p": 0.857142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.70890042681478,
                    -29.373907532818613
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6378173656429,
                    -30.593509784480467
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6285818441082,
                    -30.41331620289954
                ]
            },
            "properties": {
                "p": 0.464788732394
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.20518173779794,
                    -31.383268602242218
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0169878066423,
                    -29.358745324132748
                ]
            },
            "properties": {
                "p": 0.272727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.87528299666778,
                    -31.125967695724356
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.64244895199968,
                    -30.683614255760112
                ]
            },
            "properties": {
                "p": 0.571428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6061822733882,
                    -29.37878475845435
                ]
            },
            "properties": {
                "p": 0.0869565217391
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6239778539939,
                    -30.323227527603446
                ]
            },
            "properties": {
                "p": 0.709677419355
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.63661091894747,
                    -31.544767594103078
                ]
            },
            "properties": {
                "p": 0.198113207547
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.11966058438458,
                    -29.353514464115705
                ]
            },
            "properties": {
                "p": 0.205128205128
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.64708979222308,
                    -30.77372355693022
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.50345326790165,
                    -29.38357353609264
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.61938300787227,
                    -30.23314455220423
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.31556895808905,
                    -31.468842436968014
                ]
            },
            "properties": {
                "p": 0.08
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.53139470751415,
                    -31.549588621685338
                ]
            },
            "properties": {
                "p": 0.0394736842105
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2003230388711,
                    -29.487403845303074
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.22232152700033,
                    -29.348195236307728
                ]
            },
            "properties": {
                "p": 0.145454545455
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.65173991405618,
                    -30.863837469842906
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9900515268196,
                    -31.30195137149995
                ]
            },
            "properties": {
                "p": 0.00239234449761
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.61479727854675,
                    -30.143067493547306
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.10013304087832,
                    -31.38771726095858
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.85290831502607,
                    -31.62494690267191
                ]
            },
            "properties": {
                "p": 0.760283687943
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.42616726194416,
                    -31.554318896698817
                ]
            },
            "properties": {
                "p": 0.120967741935
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3249704382775,
                    -29.342787657591252
                ]
            },
            "properties": {
                "p": 0.183006535948
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.21042534346532,
                    -31.47338643354967
                ]
            },
            "properties": {
                "p": 0.015503875969
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.65639934535295,
                    -30.953955776095825
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.80589375017647,
                    -29.278985488808082
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7705194240758,
                    -31.130131383704423
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7476095007494,
                    -31.629954588989087
                ]
            },
            "properties": {
                "p": 0.275
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.52914160997486,
                    -30.50736407314433
                ]
            },
            "properties": {
                "p": 0.586206896552
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.90848906882897,
                    -29.27393684098096
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.70328721891335,
                    -29.283945814918628
                ]
            },
            "properties": {
                "p": 0.246913580247
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5336604231481,
                    -30.5974676728302
                ]
            },
            "properties": {
                "p": 0.358490566038
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.52463179023368,
                    -30.417265737665108
                ]
            },
            "properties": {
                "p": 0.730769230769
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.01107297882857,
                    -29.268799887466606
                ]
            },
            "properties": {
                "p": 0.3
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.53818825666514,
                    -30.68757631907483
                ]
            },
            "properties": {
                "p": 0.3
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.60066967121134,
                    -29.288817803563425
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.52013093711957,
                    -30.327172883779927
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.64229899394655,
                    -31.634871458980683
                ]
            },
            "properties": {
                "p": 0.172043010753
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.1136452842645,
                    -29.263574644574682
                ]
            },
            "properties": {
                "p": 0.232142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.32092879401165,
                    -31.558958404253065
                ]
            },
            "properties": {
                "p": 0.0409836065574
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.54272513754518,
                    -30.77768979397188
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.51563902393403,
                    -30.23708572861372
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.99507402020458,
                    -31.392075298260195
                ]
            },
            "properties": {
                "p": 0.169811320755
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6610681140789,
                    -31.04407825703403
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.8850877281772,
                    -31.306214325293233
                ]
            },
            "properties": {
                "p": 0.00165289256198
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.536977006751,
                    -31.639697497174563
                ]
            },
            "properties": {
                "p": 0.119760479042
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.10527116237108,
                    -31.47783972822417
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.2162057893599,
                    -29.258261128894908
                ]
            },
            "properties": {
                "p": 0.0246913580247
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.39540231181115,
                    -29.298296706861194
                ]
            },
            "properties": {
                "p": 0.0168067226891
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5111560240843,
                    -30.14700448902707
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.69976836579886,
                    -29.778813525654982
                ]
            },
            "properties": {
                "p": 0.0142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.99457034473903,
                    -29.496194422740153
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.21567951562466,
                    -31.563507129743282
                ]
            },
            "properties": {
                "p": 0.101604278075
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.43164375143564,
                    -31.64443268838443
                ]
            },
            "properties": {
                "p": 0.0536912751678
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.31875429847395,
                    -29.252859357297147
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5518261500115,
                    -30.95793035681725
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.80019118167706,
                    -29.189037187045965
                ]
            },
            "properties": {
                "p": 0.037037037037
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7534150094424,
                    -31.720055781185057
                ]
            },
            "properties": {
                "p": 0.710144927536
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.42507922101552,
                    -30.5112280453337
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.90268615621042,
                    -29.183993967602014
                ]
            },
            "properties": {
                "p": 0.481481481481
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.697685027472,
                    -29.1939921798351
                ]
            },
            "properties": {
                "p": 0.114754098361
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.42949446032736,
                    -30.601335726356993
                ]
            },
            "properties": {
                "p": 0.272727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.42067276974976,
                    -30.42112562733613
                ]
            },
            "properties": {
                "p": 0.040404040404
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.89000488680165,
                    -31.396342700418238
                ]
            },
            "properties": {
                "p": 0.0161290322581
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.00516975560072,
                    -29.178862537520722
                ]
            },
            "properties": {
                "p": 0.139534883721
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5951678891953,
                    -29.198858930232173
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.41627508033434,
                    -30.331028689766335
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.78011405774924,
                    -31.310386725064724
                ]
            },
            "properties": {
                "p": 0.00842105263158
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.64799854936172,
                    -31.724977754478786
                ]
            },
            "properties": {
                "p": 0.260273972603
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.79350409195473,
                    -29.594651409875116
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.32629944041062,
                    -31.6490770177097
                ]
            },
            "properties": {
                "p": 0.160583941606
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.69512612166375,
                    -29.68877357558599
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.10764178450762,
                    -29.173642913099428
                ]
            },
            "properties": {
                "p": 0.0181818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.49263996257366,
                    -29.203637422779956
                ]
            },
            "properties": {
                "p": 0.214285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.11041963882255,
                    -31.567965058850426
                ]
            },
            "properties": {
                "p": 0.206896551724
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.41188612667753,
                    -30.240937449764086
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54257057413037,
                    -31.729808801601067
                ]
            },
            "properties": {
                "p": 0.222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.21010204772392,
                    -29.168335110915482
                ]
            },
            "properties": {
                "p": 0.0695652173913
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.22094428622054,
                    -31.653630470535642
                ]
            },
            "properties": {
                "p": 0.203007518797
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4371312966592,
                    -31.734548907355208
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3125503501778,
                    -29.162939147826098
                ]
            },
            "properties": {
                "p": 0.0864197530864
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.78492585181698,
                    -31.400519453989368
                ]
            },
            "properties": {
                "p": 0.0126582278481
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.44724382561782,
                    -30.961814723590724
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.40313432278907,
                    -30.06077292969692
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.69049303316984,
                    -29.59874083876374
                ]
            },
            "properties": {
                "p": 0.0212765957447
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.00514937577347,
                    -31.5723321775411
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.75923224608024,
                    -31.81015918504424
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.79449979287082,
                    -29.099097182975186
                ]
            },
            "properties": {
                "p": 0.20253164557
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.89689461875673,
                    -29.094059393195835
                ]
            },
            "properties": {
                "p": 0.772727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.32531968317787,
                    -30.60511393283648
                ]
            },
            "properties": {
                "p": 0.769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.69209382012335,
                    -29.104046841183475
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9992781028785,
                    -29.08893348785068
                ]
            },
            "properties": {
                "p": 0.253164556962
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.33168092999665,
                    -31.739198056830666
                ]
            },
            "properties": {
                "p": 0.157894736842
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.32963993057206,
                    -30.695230644532796
                ]
            },
            "properties": {
                "p": 0.454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.41498649693494,
                    -29.157455040968273
                ]
            },
            "properties": {
                "p": 0.37037037037
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.58967689554498,
                    -29.108908352095177
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65370961995086,
                    -31.815086259907705
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.11557850154202,
                    -31.658093032533507
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.45170340177083,
                    -31.051945449664707
                ]
            },
            "properties": {
                "p": 0.0172413793103
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.10165005046392,
                    -29.083719483224975
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.39877142088903,
                    -29.970700082581473
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.48724921429232,
                    -29.113681700264642
                ]
            },
            "properties": {
                "p": 0.0983606557377
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54817544377264,
                    -31.81992231425739
                ]
            },
            "properties": {
                "p": 0.444444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.2040102668733,
                    -29.078417395883527
                ]
            },
            "properties": {
                "p": 0.029197080292
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.22621968732648,
                    -31.743756235402827
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.679837126518,
                    -31.40460554581575
                ]
            },
            "properties": {
                "p": 0.00714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.78406293497906,
                    -29.41461719422415
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.39441715140964,
                    -29.880633798928628
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.44262993109663,
                    -31.824667332886484
                ]
            },
            "properties": {
                "p": 0.494505494505
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3063585576016,
                    -29.073027242670847
                ]
            },
            "properties": {
                "p": 0.53642384106
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.29957807641046,
                    -30.064527200288307
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.78881955094752,
                    -29.009165689903654
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.21692828450074,
                    -30.518686721216593
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.89111442308888,
                    -29.004133331050234
                ]
            },
            "properties": {
                "p": 0.482926829268
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.68651356462658,
                    -29.01411001229117
                ]
            },
            "properties": {
                "p": 0.0652173913043
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.12074778196506,
                    -31.74822342873318
                ]
            },
            "properties": {
                "p": 0.105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2127286481631,
                    -30.428576422850085
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3370732956124,
                    -31.829321300874295
                ]
            },
            "properties": {
                "p": 0.522388059701
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.4086947282808,
                    -29.0675490407111
                ]
            },
            "properties": {
                "p": 0.611764705882
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4606494233128,
                    -31.23221854226929
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9933979867147,
                    -28.999012951724147
                ]
            },
            "properties": {
                "p": 0.54347826087
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.58419665858952,
                    -29.018966282499104
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65943224061232,
                    -31.90519675434512
                ]
            },
            "properties": {
                "p": 0.641025641026
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.29531755082706,
                    -29.974450359987944
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.79457854023576,
                    -31.580793928968905
                ]
            },
            "properties": {
                "p": 0.0168539325843
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.68455300581377,
                    -31.494745611659297
                ]
            },
            "properties": {
                "p": 0.9
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0956700476187,
                    -28.993804568198236
                ]
            },
            "properties": {
                "p": 0.315789473684
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4818690274252,
                    -29.023734485093478
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.68125421504854,
                    -29.41869786427425
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9048158920706,
                    -31.666745428159597
                ]
            },
            "properties": {
                "p": 0.0697674418605
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5747389222895,
                    -31.40860096302508
                ]
            },
            "properties": {
                "p": 0.0602409638554
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.55379164993576,
                    -31.910037814203697
                ]
            },
            "properties": {
                "p": 0.381818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.19793041172653,
                    -28.988508197024938
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.48444372904697,
                    -29.606653389052482
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.77935627933618,
                    -29.324611766596636
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.23150575114533,
                    -31.833884203586432
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.23381085073981,
                    -30.879178343934974
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.44813968836502,
                    -31.914787744021034
                ]
            },
            "properties": {
                "p": 0.73719376392
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.30017888509775,
                    -28.983123855035995
                ]
            },
            "properties": {
                "p": 0.943977591036
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.1259275116541,
                    -31.83835602667478
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.68927839270447,
                    -31.584888535068565
                ]
            },
            "properties": {
                "p": 0.0289855072464
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7994194932678,
                    -31.67093523456019
                ]
            },
            "properties": {
                "p": 0.0864197530864
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.35574363957699,
                    -31.23602462058598
                ]
            },
            "properties": {
                "p": 0.0222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.57934916783316,
                    -31.498745192154075
                ]
            },
            "properties": {
                "p": 0.027027027027
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.34247657023326,
                    -31.919446528866484
                ]
            },
            "properties": {
                "p": 0.842391304348
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.78315042322504,
                    -28.91924292084932
                ]
            },
            "properties": {
                "p": 0.100775193798
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.40241527392834,
                    -28.97765155934263
                ]
            },
            "properties": {
                "p": 0.823639774859
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8853455359582,
                    -28.91421599416322
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5784364202986,
                    -29.42268995963734
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.11694451040339,
                    -30.612400757175763
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.6809442288668,
                    -28.924181906195766
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2868217663338,
                    -29.794316582385843
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.97495629693316,
                    -29.13622547898313
                ]
            },
            "properties": {
                "p": 0.037037037037
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.48002238673126,
                    -29.516619607992503
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.98752937329473,
                    -28.909101142118715
                ]
            },
            "properties": {
                "p": 0.541666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.19185525022903,
                    -29.978111443039047
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.17482373088978,
                    -29.037510537052285
                ]
            },
            "properties": {
                "p": 0.625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.57872714678194,
                    -28.929032934500817
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.90977283708185,
                    -31.756884803745546
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.08970174159208,
                    -28.90389838097626
                ]
            },
            "properties": {
                "p": 0.0662983425414
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1251778469162,
                    -30.792654376727825
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.47649937099362,
                    -28.933795990342198
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.55941922701612,
                    -32.00015508026963
                ]
            },
            "properties": {
                "p": 0.325757575758
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2368025100101,
                    -31.924014154095808
                ]
            },
            "properties": {
                "p": 0.555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.50463938455255,
                    -28.972091327335363
                ]
            },
            "properties": {
                "p": 0.659793814433
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.02033879122826,
                    -31.84273675607755
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.19186244733902,
                    -28.898607727275696
                ]
            },
            "properties": {
                "p": 0.973821989529
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1293068702712,
                    -30.882788204251618
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3742610956475,
                    -28.938471058577157
                ]
            },
            "properties": {
                "p": 0.100917431193
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.18770535463096,
                    -29.88803726593246
                ]
            },
            "properties": {
                "p": 0.0470588235294
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0724551475335,
                    -29.041926320448614
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4536606022172,
                    -32.004909919571325
                ]
            },
            "properties": {
                "p": 0.433333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.69401331595185,
                    -31.675034095677503
                ]
            },
            "properties": {
                "p": 0.352941176471
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5839687088358,
                    -31.588892277476962
                ]
            },
            "properties": {
                "p": 0.0615384615385
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.29401129715768,
                    -28.893229197836103
                ]
            },
            "properties": {
                "p": 0.980784012298
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1334441633349,
                    -30.972926419060343
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.80427022483303,
                    -31.761078958181507
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4756097487569,
                    -29.42659346764146
                ]
            },
            "properties": {
                "p": 0.05
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.27201251500964,
                    -28.943058124342535
                ]
            },
            "properties": {
                "p": 0.123376623377
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.47413603441237,
                    -31.502653990884045
                ]
            },
            "properties": {
                "p": 0.00836820083682
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.1311177222992,
                    -31.92849060535129
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.37708588761515,
                    -29.52043861077858
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6720516963804,
                    -29.238686318203946
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.25082906489797,
                    -31.23974017662907
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.18356366323007,
                    -29.797969866005808
                ]
            },
            "properties": {
                "p": 0.0344827586207
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3478907869678,
                    -32.00957351960274
                ]
            },
            "properties": {
                "p": 0.670588235294
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9700768137967,
                    -29.046253963258955
                ]
            },
            "properties": {
                "p": 0.0185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3961480978057,
                    -28.887762809755728
                ]
            },
            "properties": {
                "p": 0.663060278207
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.36451492315504,
                    -31.4163197235314
                ]
            },
            "properties": {
                "p": 0.0117647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7774923771488,
                    -28.82932908853828
                ]
            },
            "properties": {
                "p": 0.12315270936
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.87958792424567,
                    -28.82430759524098
                ]
            },
            "properties": {
                "p": 0.578947368421
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.67538578085444,
                    -28.83426273564302
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.16975382346416,
                    -28.94755717305477
                ]
            },
            "properties": {
                "p": 0.181818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.98167222893574,
                    -28.819198271720165
                ]
            },
            "properties": {
                "p": 0.342857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.08374509813808,
                    -28.814001134224036
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4711402141399,
                    -28.843866428794843
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0254224218356,
                    -31.932875868561716
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.24210999638453,
                    -32.01414586570987
                ]
            },
            "properties": {
                "p": 0.357142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.49827265617859,
                    -28.882208580411856
                ]
            },
            "properties": {
                "p": 0.408312958435
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.56505820954948,
                    -32.09027389105651
                ]
            },
            "properties": {
                "p": 0.663366336634
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2551050050958,
                    -31.329889963374356
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5885975734208,
                    -31.679041998612966
                ]
            },
            "properties": {
                "p": 0.0568181818182
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4786497014037,
                    -31.59280514359027
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1794301517342,
                    -29.707909458811727
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.1858063389024,
                    -28.80871619927983
                ]
            },
            "properties": {
                "p": 0.545112781955
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.08433704928456,
                    -29.89160533888736
                ]
            },
            "properties": {
                "p": 0.02
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0674852155112,
                    -28.951968190410128
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.36900163076103,
                    -28.848536444300105
                ]
            },
            "properties": {
                "p": 0.154761904762
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.37277439855413,
                    -29.430408375895723
                ]
            },
            "properties": {
                "p": 0.163265306122
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.8091307645687,
                    -31.85122487901128
                ]
            },
            "properties": {
                "p": 0.0645161290323
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.36891381779986,
                    -31.50647199553971
                ]
            },
            "properties": {
                "p": 0.038374717833
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.45919270654267,
                    -32.09503363812146
                ]
            },
            "properties": {
                "p": 0.171717171717
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.28785575841107,
                    -28.80334348369381
                ]
            },
            "properties": {
                "p": 0.748800959233
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.27414088298934,
                    -29.524168906543146
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0288274084694,
                    -30.976449810302334
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.6003847793116,
                    -28.876566527460916
                ]
            },
            "properties": {
                "p": 0.16091954023
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.13631844571844,
                    -32.01862694352542
                ]
            },
            "properties": {
                "p": 0.625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.26685277226306,
                    -28.853118552529253
                ]
            },
            "properties": {
                "p": 0.242424242424
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1459059098375,
                    -31.243365198685
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.91971682348316,
                    -31.9371699299425
                ]
            },
            "properties": {
                "p": 0.583333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.08029738023725,
                    -29.801534133814958
                ]
            },
            "properties": {
                "p": 0.11214953271
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.96520688576464,
                    -28.956291162384474
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.35331597905878,
                    -32.09970205165032
                ]
            },
            "properties": {
                "p": 0.238805970149
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.17530479594703,
                    -29.617856259626627
                ]
            },
            "properties": {
                "p": 0.0185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.38989316398153,
                    -28.797883004551224
                ]
            },
            "properties": {
                "p": 0.538461538462
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0328682825114,
                    -31.066595889959018
                ]
            },
            "properties": {
                "p": 0.09375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.77184538029107,
                    -28.739424405403007
                ]
            },
            "properties": {
                "p": 0.302325581395
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8738415549614,
                    -28.7344083466959
                ]
            },
            "properties": {
                "p": 0.15625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.48317247908955,
                    -31.682958930754218
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9758265200863,
                    -28.729304552920603
                ]
            },
            "properties": {
                "p": 0.154411764706
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.56782017303698,
                    -28.74919325406437
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7035118871445,
                    -31.855332245850814
                ]
            },
            "properties": {
                "p": 0.185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.3684713899392,
                    -29.3403859951118
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0305163503528,
                    -32.023016738968785
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.37332158329556,
                    -31.596627121090677
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15007653129555,
                    -31.33351877287849
                ]
            },
            "properties": {
                "p": 0.0833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.07780008314427,
                    -28.724113040312957
                ]
            },
            "properties": {
                "p": 0.0393700787402
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.24742824286375,
                    -32.10427911697936
                ]
            },
            "properties": {
                "p": 0.202247191011
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.49191836306812,
                    -28.792334779216183
                ]
            },
            "properties": {
                "p": 0.426332288401
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.814001142232,
                    -31.94137277599564
                ]
            },
            "properties": {
                "p": 0.151079136691
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0625250053011,
                    -28.86201898914902
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.17976205174386,
                    -28.718833825387577
                ]
            },
            "properties": {
                "p": 0.0610687022901
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.36375244101328,
                    -28.758610974598
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.66288526379515,
                    -29.0587079120275
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.28171223362563,
                    -28.713466924937933
                ]
            },
            "properties": {
                "p": 0.796420581655
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.1415297138588,
                    -32.108764819731675
                ]
            },
            "properties": {
                "p": 0.875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.59393116326447,
                    -28.786698825331637
                ]
            },
            "properties": {
                "p": 0.127272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.92470392580032,
                    -32.02731523824617
                ]
            },
            "properties": {
                "p": 0.535714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.04097438506102,
                    -31.2468996753255
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15425554774419,
                    -31.423675638242692
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.97702311822837,
                    -29.80500937451403
                ]
            },
            "properties": {
                "p": 0.571428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4877043950653,
                    -31.773115131744515
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0722419556331,
                    -29.621412914190053
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.59788338639936,
                    -31.859348465622055
                ]
            },
            "properties": {
                "p": 0.00475059382423
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.35875217988345,
                    -32.189831903350225
                ]
            },
            "properties": {
                "p": 0.461538461538
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.36417683678872,
                    -29.250371682550615
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3836504366644,
                    -28.708012356036186
                ]
            },
            "properties": {
                "p": 0.677137870855
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.26572853496987,
                    -29.344108291157013
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.92813870406295,
                    -31.070032610345315
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.70827559319582,
                    -31.94548439350983
                ]
            },
            "properties": {
                "p": 0.416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2679845675097,
                    -31.60035819794641
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.15964372885045,
                    -28.767677447162853
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.76620940035042,
                    -28.649529083580482
                ]
            },
            "properties": {
                "p": 0.0573770491803
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.66430142073656,
                    -28.654452050678714
                ]
            },
            "properties": {
                "p": 0.0731707317073
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.96999221332538,
                    -28.639420197816502
                ]
            },
            "properties": {
                "p": 0.504201680672
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5623826486187,
                    -28.659287346273658
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.252757282175,
                    -32.19441368622873
                ]
            },
            "properties": {
                "p": 0.455357142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.97309327329754,
                    -29.714941450166084
                ]
            },
            "properties": {
                "p": 0.411764705882
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.8188813877005,
                    -32.03152242785055
                ]
            },
            "properties": {
                "p": 0.194444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.48557646887144,
                    -28.70247013603323
                ]
            },
            "properties": {
                "p": 0.614814814815
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.0718666626309,
                    -28.634234311318735
                ]
            },
            "properties": {
                "p": 0.83606557377
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15844298454275,
                    -31.51383557481985
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.46045327633615,
                    -28.664034954978334
                ]
            },
            "properties": {
                "p": 0.0420168067227
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.17372955132552,
                    -28.6289608176536
                ]
            },
            "properties": {
                "p": 0.581395348837
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.49224547703773,
                    -31.86327352569562
                ]
            },
            "properties": {
                "p": 0.0105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4702906228585,
                    -32.275284817428435
                ]
            },
            "properties": {
                "p": 0.35
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.92970114168546,
                    -32.117462081433416
                ]
            },
            "properties": {
                "p": 0.0238095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.14675155879678,
                    -32.198904012278405
                ]
            },
            "properties": {
                "p": 0.531914893617
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.58749013839653,
                    -28.696840282558526
                ]
            },
            "properties": {
                "p": 0.531309297913
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.60254039160935,
                    -31.94950476956049
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.27558068770588,
                    -28.623599733601623
                ]
            },
            "properties": {
                "p": 0.559471365639
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.81956985071673,
                    -30.983225764769116
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.96917118341918,
                    -29.624880731900312
                ]
            },
            "properties": {
                "p": 0.857142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.16297742230063,
                    -29.347742058707922
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7130489518172,
                    -32.03563829456185
                ]
            },
            "properties": {
                "p": 0.101265822785
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.36419942295453,
                    -32.27996285281931
                ]
            },
            "properties": {
                "p": 0.276595744681
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.37741988020207,
                    -28.618151076222
                ]
            },
            "properties": {
                "p": 0.890942698706
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.15460348369203,
                    -28.67775151006354
                ]
            },
            "properties": {
                "p": 0.625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.04073522643623,
                    -32.20330286739994
                ]
            },
            "properties": {
                "p": 0.206896551724
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.76058440515104,
                    -28.5596433349102
                ]
            },
            "properties": {
                "p": 0.260869565217
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.86238241235927,
                    -28.554638148907348
                ]
            },
            "properties": {
                "p": 0.466666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65877544527297,
                    -28.564560960283025
                ]
            },
            "properties": {
                "p": 0.307692307692
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.86991310133607,
                    -29.71832403684381
                ]
            },
            "properties": {
                "p": 0.28
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.96416927536205,
                    -28.54954541820686
                ]
            },
            "properties": {
                "p": 0.588235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.70379435788874,
                    -30.716034366560912
                ]
            },
            "properties": {
                "p": 0.0416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2580971471782,
                    -32.28454935155838
                ]
            },
            "properties": {
                "p": 0.366071428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5569557243852,
                    -28.569391009371977
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.47924693738014,
                    -28.612614862852205
                ]
            },
            "properties": {
                "p": 0.737727910238
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.3865983738793,
                    -31.867107413728768
                ]
            },
            "properties": {
                "p": 0.0178571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.06594480275035,
                    -28.54436515901962
                ]
            },
            "properties": {
                "p": 0.929487179487
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.49679575282573,
                    -31.953433891509828
                ]
            },
            "properties": {
                "p": 0.0588235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.05263363652665,
                    -28.682148222915032
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.45512543427006,
                    -28.57413346680179
                ]
            },
            "properties": {
                "p": 0.0693069306931
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.25734921790928,
                    -29.1640799445158
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.58204393732564,
                    -32.36063737437379
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15888444928345,
                    -29.257719838733912
                ]
            },
            "properties": {
                "p": 0.117647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.60720683403582,
                    -32.03966282544687
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.16770880324378,
                    -28.53909738783494
                ]
            },
            "properties": {
                "p": 0.472392638037
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7112103345355,
                    -30.896325870796925
                ]
            },
            "properties": {
                "p": 0.0526315789474
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.93470850191153,
                    -32.20761023778125
                ]
            },
            "properties": {
                "p": 0.188679245283
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.35328476683011,
                    -28.57878831747594
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.06021824977552,
                    -29.351287286225883
                ]
            },
            "properties": {
                "p": 0.0675675675676
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.15198401273886,
                    -32.28904429924981
                ]
            },
            "properties": {
                "p": 0.508474576271
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.58106166794389,
                    -28.606991111108265
                ]
            },
            "properties": {
                "p": 0.594036697248
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.47585650331695,
                    -32.3654118342304
                ]
            },
            "properties": {
                "p": 0.315018315018
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.8660926790896,
                    -29.628259701756555
                ]
            },
            "properties": {
                "p": 0.705882352941
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.83108706952524,
                    -31.253696948074563
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.2694610856928,
                    -28.533742121420545
                ]
            },
            "properties": {
                "p": 0.138686131387
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.71783199235645,
                    -32.12579372747988
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7149294658813,
                    -30.986478306609158
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.96135017722304,
                    -29.444781773438862
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.3696577419207,
                    -32.37009467795232
                ]
            },
            "properties": {
                "p": 0.0625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.3712014590809,
                    -28.52829937682236
                ]
            },
            "properties": {
                "p": 0.522522522523
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.04586023698,
                    -32.29344768178498
                ]
            },
            "properties": {
                "p": 0.0970873786408
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.14957306817377,
                    -28.5878351395646
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.39104189231392,
                    -31.957271747006796
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.82867160216904,
                    -32.21182610989746
                ]
            },
            "properties": {
                "p": 0.196428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.83494158575266,
                    -31.343861316656504
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.7549703626422,
                    -28.46976737093246
                ]
            },
            "properties": {
                "p": 0.3125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.85666957370125,
                    -28.464767623003507
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.65326023083952,
                    -28.47467965345809
                ]
            },
            "properties": {
                "p": 0.158415841584
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.26344787086674,
                    -32.37468589084669
                ]
            },
            "properties": {
                "p": 0.116959064327
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0562261027016,
                    -29.261261255378614
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.47292973252655,
                    -28.5227691713647
                ]
            },
            "properties": {
                "p": 0.309633027523
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.9583576730347,
                    -28.459680425591376
                ]
            },
            "properties": {
                "p": 0.736842105263
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.5515393693991,
                    -28.479504454938663
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.72239012641563,
                    -31.16679545173901
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.61188274237531,
                    -32.1298224117396
                ]
            },
            "properties": {
                "p": 0.05
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.04770242134396,
                    -28.592227082179864
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.06003446978644,
                    -28.454505794894466
                ]
            },
            "properties": {
                "p": 0.71875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.60305978315853,
                    -30.80933341819481
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4498079695485,
                    -28.484241760010764
                ]
            },
            "properties": {
                "p": 0.153846153846
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.95745121533184,
                    -29.35474396245327
                ]
            },
            "properties": {
                "p": 0.030303030303
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.93972603737637,
                    -32.29775948534267
                ]
            },
            "properties": {
                "p": 0.0470297029703
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.16169977322858,
                    -28.449243747389353
                ]
            },
            "properties": {
                "p": 0.356060606061
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.60666708914005,
                    -30.89948479032823
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.15722710802245,
                    -32.37918545850819
                ]
            },
            "properties": {
                "p": 0.197916666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.76300664251886,
                    -29.631549813039655
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.34806622263477,
                    -28.48889155358946
                ]
            },
            "properties": {
                "p": 0.255813953488
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.5746457152855,
                    -28.51715152264989
                ]
            },
            "properties": {
                "p": 0.316076294278
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.72262474428052,
                    -32.21595047051085
                ]
            },
            "properties": {
                "p": 0.286821705426
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.95192226567903,
                    -31.61100590862022
                ]
            },
            "properties": {
                "p": 0.0263157894737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.72613170059262,
                    -31.256959722753876
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.48143371118633,
                    -32.45553950612671
                ]
            },
            "properties": {
                "p": 0.0342465753425
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.26335339276324,
                    -28.443894299830816
                ]
            },
            "properties": {
                "p": 0.617647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.285279025656,
                    -31.961018323987297
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.24631432012256,
                    -28.493453820868325
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.39549441691298,
                    -32.04743782944006
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15072258805816,
                    -29.077700452912158
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.37512717056745,
                    -32.460227156424025
                ]
            },
            "properties": {
                "p": 0.0422535211268
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.24900273775268,
                    -28.984085576286866
                ]
            },
            "properties": {
                "p": 0.266666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.50592399768763,
                    -32.133759653188406
                ]
            },
            "properties": {
                "p": 0.230769230769
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.83358163153173,
                    -32.30197969638908
                ]
            },
            "properties": {
                "p": 0.214285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.36499513792504,
                    -28.438457469251663
                ]
            },
            "properties": {
                "p": 0.441558441558
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0509956713899,
                    -32.38359336681896
                ]
            },
            "properties": {
                "p": 0.0849673202614
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.61390340526162,
                    -31.079800461636836
                ]
            },
            "properties": {
                "p": 0.272727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.84267392313996,
                    -31.524199696886768
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.1445524535918,
                    -28.497928547319503
                ]
            },
            "properties": {
                "p": 0.105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.61656814544074,
                    -32.21998330667113
                ]
            },
            "properties": {
                "p": 0.555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.26880948636813,
                    -32.46482308175199
                ]
            },
            "properties": {
                "p": 0.171641791045
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.74936724089764,
                    -28.37990140288634
                ]
            },
            "properties": {
                "p": 0.173913043478
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.8509678467899,
                    -28.37490709415235
                ]
            },
            "properties": {
                "p": 0.416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.4666248183829,
                    -28.432933272962778
                ]
            },
            "properties": {
                "p": 0.353535353535
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.64775574606415,
                    -28.38480834146282
                ]
            },
            "properties": {
                "p": 0.154411764706
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.61753245895727,
                    -31.169964322983997
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.49511782386804,
                    -30.722248897009795
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.95255737331036,
                    -28.36982543116861
                ]
            },
            "properties": {
                "p": 0.813953488372
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54613355284312,
                    -28.389627894252072
                ]
            },
            "properties": {
                "p": 0.622641509434
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.04278081473547,
                    -28.502315718693747
                ]
            },
            "properties": {
                "p": 0.105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.05413563015392,
                    -28.364656430120995
                ]
            },
            "properties": {
                "p": 0.416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.94475377910328,
                    -32.38790960194868
                ]
            },
            "properties": {
                "p": 0.261904761905
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.4445008519095,
                    -28.394360045902623
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.73363744991624,
                    -31.437298564076542
                ]
            },
            "properties": {
                "p": 0.0185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7274272371759,
                    -32.3061083016778
                ]
            },
            "properties": {
                "p": 0.0751879699248
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.65991327366942,
                    -29.63475105531235
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.17950736854476,
                    -31.964673610674005
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.15570242714284,
                    -28.359400107473334
                ]
            },
            "properties": {
                "p": 0.114503816794
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.1624808771163,
                    -32.469327267695824
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.50211661628424,
                    -30.902553490644152
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.5682422439424,
                    -28.42732172855299
                ]
            },
            "properties": {
                "p": 0.93359375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.34285783405713,
                    -28.399004781341176
                ]
            },
            "properties": {
                "p": 0.0350877192982
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.62116880559225,
                    -31.260131909159355
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1466536526794,
                    -28.987703713933783
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.94967626070033,
                    -29.1746927478721
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.24484175128617,
                    -28.894101667082992
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.25725757422896,
                    -28.354056479967454
                ]
            },
            "properties": {
                "p": 0.647058823529
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.51050202296466,
                    -32.223924605715254
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.83850164942623,
                    -32.39213415035469
                ]
            },
            "properties": {
                "p": 0.104895104895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.73740167059634,
                    -31.527472694610257
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.05614156147544,
                    -32.47373970012846
                ]
            },
            "properties": {
                "p": 0.0680272108844
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.35880088149585,
                    -28.348625564622985
                ]
            },
            "properties": {
                "p": 0.257731958763
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.65630338533478,
                    -29.54468719049654
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.62481246716368,
                    -31.350303000629367
                ]
            },
            "properties": {
                "p": 0.631578947368
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.50914348381588,
                    -31.08287560787099
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2741820269446,
                    -32.55496070171477
                ]
            },
            "properties": {
                "p": 0.0787401574803
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.4603321591608,
                    -28.343107378737322
                ]
            },
            "properties": {
                "p": 0.715447154472
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.18374586574856,
                    -32.05484734210451
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.38738408360103,
                    -30.63507279756361
                ]
            },
            "properties": {
                "p": 0.3
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.38063450173672,
                    -30.454791498662544
                ]
            },
            "properties": {
                "p": 0.0144927536232
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.51266749857422,
                    -31.17304269067497
                ]
            },
            "properties": {
                "p": 0.857142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.64226195969638,
                    -28.29494723525315
                ]
            },
            "properties": {
                "p": 0.196078431373
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.29397889140859,
                    -32.141359758470756
                ]
            },
            "properties": {
                "p": 0.181818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.07372713678075,
                    -31.96823759557661
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.94979175824167,
                    -32.4780603652105
                ]
            },
            "properties": {
                "p": 0.35
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.54073824401962,
                    -28.29976153828764
                ]
            },
            "properties": {
                "p": 0.177570093458
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7322395007493,
                    -32.39626699878189
                ]
            },
            "properties": {
                "p": 0.209459459459
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.94580022292118,
                    -29.084679771778248
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.14259268282984,
                    -28.897715895005476
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6284634657572,
                    -31.440477377616233
                ]
            },
            "properties": {
                "p": 0.7
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.74117348579728,
                    -31.617649671474528
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.43920405120878,
                    -28.304488535471894
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.16774535262138,
                    -32.559469504237185
                ]
            },
            "properties": {
                "p": 0.109090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.56185121757704,
                    -28.337501939885748
                ]
            },
            "properties": {
                "p": 0.840978593272
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.51619859567018,
                    -31.263213497290245
                ]
            },
            "properties": {
                "p": 0.914285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.51508935446464,
                    -32.314090643434255
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.85433104472168,
                    -31.79472807136698
                ]
            },
            "properties": {
                "p": 0.222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7482048201901,
                    -29.271354725377435
                ]
            },
            "properties": {
                "p": 0.0394736842105
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.25117359553622,
                    -28.264228872662308
                ]
            },
            "properties": {
                "p": 0.7
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.4009643977854,
                    -30.99569406823005
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.84343168634138,
                    -32.48228924939042
                ]
            },
            "properties": {
                "p": 0.205882352941
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.63212182354738,
                    -31.530654820100096
                ]
            },
            "properties": {
                "p": 0.347368421053
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.55330441697635,
                    -29.547796221431533
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.06129793917552,
                    -32.56388645912224
                ]
            },
            "properties": {
                "p": 0.0357142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.625967551587,
                    -32.400308134262886
                ]
            },
            "properties": {
                "p": 0.545454545455
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.51973679646767,
                    -31.353387808171824
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.35261865469118,
                    -28.258803873746242
                ]
            },
            "properties": {
                "p": 0.742857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.07785858083182,
                    -32.058415009905104
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.40437650132492,
                    -31.085860335599676
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2983420769484,
                    -32.23153254324001
                ]
            },
            "properties": {
                "p": 0.263157894737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.84332754750966,
                    -29.088037021973875
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.2795655259938,
                    -32.64509852795972
                ]
            },
            "properties": {
                "p": 0.0588235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.4540517192104,
                    -28.25329169947603
                ]
            },
            "properties": {
                "p": 0.607142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.85823247756082,
                    -31.88490886136023
                ]
            },
            "properties": {
                "p": 0.00757575757576
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.40779545586773,
                    -31.17603054510341
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7370615648283,
                    -32.486426339404474
                ]
            },
            "properties": {
                "p": 0.298507462687
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.95484000606785,
                    -32.56821155252152
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2831325148968,
                    -30.63795192370625
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.63578756279813,
                    -31.620835107820906
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.74452253367005,
                    -29.18132611003665
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.52328212241645,
                    -31.4435654035305
                ]
            },
            "properties": {
                "p": 0.586956521739
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.28641338281335,
                    -30.72810327099448
                ]
            },
            "properties": {
                "p": 0.012987012987
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.28970081232933,
                    -30.818259434251516
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.51968602057536,
                    -32.404257544118
                ]
            },
            "properties": {
                "p": 0.407407407407
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.17302056727135,
                    -32.64961194534101
                ]
            },
            "properties": {
                "p": 0.886122299524
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.55547259999258,
                    -28.247692367413244
                ]
            },
            "properties": {
                "p": 0.575
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.41122128206098,
                    -31.266204477431298
                ]
            },
            "properties": {
                "p": 0.987654320988
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2929948231423,
                    -30.90842019516134
                ]
            },
            "properties": {
                "p": 0.984615384615
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.08199840907827,
                    -32.148593947834485
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.8483717728901,
                    -32.572444770874625
                ]
            },
            "properties": {
                "p": 0.141843971631
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.19224868861534,
                    -32.23519915783173
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.52683459505272,
                    -31.53374606333496
                ]
            },
            "properties": {
                "p": 0.0540540540541
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.29629543502872,
                    -30.998585335153734
                ]
            },
            "properties": {
                "p": 0.840476190476
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.63068161288095,
                    -32.49047162227677
                ]
            },
            "properties": {
                "p": 0.263157894737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.93807091449997,
                    -28.904680148570087
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.63946070586334,
                    -31.711018020280594
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.0664648365592,
                    -32.65403342099337
                ]
            },
            "properties": {
                "p": 0.265957446809
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.30271413350317,
                    -32.3217064103916
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.54630842026194,
                    -29.367684939145313
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.41465400063475,
                    -31.35638191302719
                ]
            },
            "properties": {
                "p": 0.886363636364
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.74084747201468,
                    -29.091305985022558
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2996026678444,
                    -31.088754635406247
                ]
            },
            "properties": {
                "p": 0.876288659794
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.26034852605721,
                    -30.007045624057028
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.75253472895866,
                    -31.888195474008725
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7418934593619,
                    -32.576586100909225
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.4477834630199,
                    -28.163486445661533
                ]
            },
            "properties": {
                "p": 0.326923076923
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9598985539855,
                    -32.658362941059465
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.30291654152467,
                    -31.178927876846256
                ]
            },
            "properties": {
                "p": 0.988372093023
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.41809363240264,
                    -31.44656263209079
                ]
            },
            "properties": {
                "p": 0.985074626866
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.17570392724645,
                    -30.550591831307447
                ]
            },
            "properties": {
                "p": 0.078431372549
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1788744042252,
                    -30.640741087079025
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.52429204979993,
                    -32.49442508531939
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.97599544473547,
                    -32.152073795462414
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.18523438183425,
                    -30.821054480044044
                ]
            },
            "properties": {
                "p": 0.297872340426
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.16623031675098,
                    -30.280176439796385
                ]
            },
            "properties": {
                "p": 0.0291262135922
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.17830655393342,
                    -32.73975436800234
                ]
            },
            "properties": {
                "p": 0.619335347432
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    153.54910635513235,
                    -28.157893221595497
                ]
            },
            "properties": {
                "p": 0.327272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1965130667677,
                    -32.325376798260024
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.9342175993459,
                    -28.814693927214915
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.3062370760851,
                    -31.269104840152956
                ]
            },
            "properties": {
                "p": 0.976470588235
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.18842392053963,
                    -30.911218180840468
                ]
            },
            "properties": {
                "p": 0.888888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.85332193981006,
                    -32.66260049197008
                ]
            },
            "properties": {
                "p": 0.388888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.63540528532855,
                    -32.58063552964095
                ]
            },
            "properties": {
                "p": 0.170212765957
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.4215401982621,
                    -31.536746414579724
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.53396106696735,
                    -31.71411569495757
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.19161985135617,
                    -31.001386259823242
                ]
            },
            "properties": {
                "p": 0.903743315508
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.07164228582621,
                    -32.74418036272132
                ]
            },
            "properties": {
                "p": 0.762644364795
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.3095642916217,
                    -31.35928530575942
                ]
            },
            "properties": {
                "p": 0.875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.41789309500513,
                    -32.49828671613231
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.25068044586612,
                    -29.736751172888145
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.19482219351255,
                    -31.091558498159394
                ]
            },
            "properties": {
                "p": 0.879310344828
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.74673521442125,
                    -32.6667460604442
                ]
            },
            "properties": {
                "p": 0.327731092437
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.98003617014314,
                    -32.242257621107775
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9649674335264,
                    -32.74851430778851
                ]
            },
            "properties": {
                "p": 0.782771535581
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.86998428800044,
                    -32.15546213038412
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5289074707577,
                    -32.58459304437361
                ]
            },
            "properties": {
                "p": 0.0434782608696
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.53753510975412,
                    -31.804304225520845
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.19803096631486,
                    -31.181734676765835
                ]
            },
            "properties": {
                "p": 0.925925925926
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.76014728776636,
                    -32.068569525512345
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.07460995868223,
                    -30.643440278866777
                ]
            },
            "properties": {
                "p": 0.0892857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.06848284989263,
                    -30.46314132234408
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.07768269549172,
                    -30.733597414530173
                ]
            },
            "properties": {
                "p": 0.393939393939
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.08076157839278,
                    -30.82375936444019
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.31148496803326,
                    -32.50205650260351
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.06238010586267,
                    -30.28286423640722
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.20124618914653,
                    -31.271914576311254
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.6401385983335,
                    -32.67079963348914
                ]
            },
            "properties": {
                "p": 0.514285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.85828221796442,
                    -32.752756189625934
                ]
            },
            "properties": {
                "p": 0.386138613861
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.08384662583867,
                    -30.91392591026
                ]
            },
            "properties": {
                "p": 0.977011494253
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.3406950040722,
                    -29.373623847716374
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.42240023573726,
                    -32.588458632699115
                ]
            },
            "properties": {
                "p": 0.181818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.54111638624607,
                    -31.894494938024174
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.08693785635654,
                    -31.004096833398687
                ]
            },
            "properties": {
                "p": 0.952380952381
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.07683031930793,
                    -32.83432706107398
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.05630158159062,
                    -30.10261075839699
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2044678814691,
                    -31.362097977218305
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.9840851129385,
                    -32.33244252517244
                ]
            },
            "properties": {
                "p": 0.0625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.87391747586074,
                    -32.245649447628324
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0944684548565,
                    -32.419137683759246
                ]
            },
            "properties": {
                "p": 0.013698630137
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09003528854782,
                    -31.094271915013096
                ]
            },
            "properties": {
                "p": 0.739130434783
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.7515868602,
                    -32.75690599494401
                ]
            },
            "properties": {
                "p": 0.324324324324
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.53353231218463,
                    -32.674761198400404
                ]
            },
            "properties": {
                "p": 0.0344827586207
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.24106951632388,
                    -29.466521520942933
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.20506788853487,
                    -32.50573443290908
                ]
            },
            "properties": {
                "p": 0.0425531914894
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.9700466763511,
                    -32.83866542946131
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.20769606282244,
                    -31.452284659665516
                ]
            },
            "properties": {
                "p": 0.590909090909
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09313894108863,
                    -31.184450936009974
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.43336481010326,
                    -29.100583048782724
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.97330802881612,
                    -30.736209378004045
                ]
            },
            "properties": {
                "p": 0.888888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.64488158141972,
                    -32.76096371074157
                ]
            },
            "properties": {
                "p": 0.010101010101
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09624883273014,
                    -31.274633677047973
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.97628261041882,
                    -30.82637407889711
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9585238400648,
                    -30.28546243287912
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.86325263834226,
                    -32.842911640579935
                ]
            },
            "properties": {
                "p": 0.408333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2378784858152,
                    -29.376460373315954
                ]
            },
            "properties": {
                "p": 0.291666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.21093075282505,
                    -31.54247440358932
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.87785866302616,
                    -32.33583784203806
                ]
            },
            "properties": {
                "p": 0.0701754385965
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.97926314807813,
                    -30.91654337487111
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95558462283682,
                    -30.195329878716656
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.09864207627191,
                    -32.509320495513094
                ]
            },
            "properties": {
                "p": 0.00340136054422
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.98224965969592,
                    -31.006717047325267
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09936498229894,
                    -31.364819918539528
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95265123833235,
                    -30.105203442612897
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.75644842701536,
                    -32.847065681131724
                ]
            },
            "properties": {
                "p": 0.213235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.53816660293398,
                    -32.76492932430601
                ]
            },
            "properties": {
                "p": 0.0136054421769
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.21417197117472,
                    -31.632666988686186
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.98524216324603,
                    -31.09689487740665
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.94972366921115,
                    -30.015083341079745
                ]
            },
            "properties": {
                "p": 0.117647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1381455107603,
                    -29.469272368095805
                ]
            },
            "properties": {
                "p": 0.636363636364
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.23469373064813,
                    -29.28640728454549
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.10248740869736,
                    -31.455009440653104
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.32029161285476,
                    -32.68240825444583
                ]
            },
            "properties": {
                "p": 0.020618556701
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9882406767743,
                    -31.187076646012116
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.33085709975524,
                    -29.10349876214241
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.77162418940827,
                    -32.33914144687073
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.866062891742,
                    -30.648568713848057
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.86035094975495,
                    -30.468258935228484
                ]
            },
            "properties": {
                "p": 0.363636363636
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.64963426423162,
                    -32.85112753810715
                ]
            },
            "properties": {
                "p": 0.0142045454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.9922077511148,
                    -32.51281467916779
                ]
            },
            "properties": {
                "p": 0.030303030303
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.66165630761103,
                    -32.252158237182215
                ]
            },
            "properties": {
                "p": 0.00531914893617
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8689274239263,
                    -30.738731258183996
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.85750350587907,
                    -30.378112136368607
                ]
            },
            "properties": {
                "p": 0.296296296296
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.13505569222878,
                    -29.379208267687687
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.99124521839911,
                    -31.277262133790558
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.10561613090402,
                    -31.54520202331509
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.87179768640016,
                    -30.82889861515669
                ]
            },
            "properties": {
                "p": 0.8
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8546617241457,
                    -30.28797102098894
                ]
            },
            "properties": {
                "p": 0.875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.55190383814767,
                    -32.16507795391473
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.23151523233554,
                    -29.196362468611827
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.4266377525791,
                    -28.92054909873531
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.87467369637096,
                    -30.91907056640993
                ]
            },
            "properties": {
                "p": 0.973684210526
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.85182558768707,
                    -30.197835806145115
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2136576415414,
                    -32.68609372161295
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9942558063118,
                    -31.367451121144647
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8775554711151,
                    -31.009246893333398
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8489950797023,
                    -30.107706708626665
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5428103719769,
                    -32.85509719878536
                ]
            },
            "properties": {
                "p": 0.0378787878788
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1319719503628,
                    -29.28915222542141
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.03521541056918,
                    -29.47193448001804
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88044302797817,
                    -31.099427377064654
                ]
            },
            "properties": {
                "p": 0.96
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.32470843269118,
                    -32.77258419532744
                ]
            },
            "properties": {
                "p": 0.0161290322581
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.66538191092943,
                    -32.342353329300806
                ]
            },
            "properties": {
                "p": 0.0245901639344
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2283429724627,
                    -29.106326139207738
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.99727245877685,
                    -31.457643388233105
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88333638437553,
                    -31.18961179849116
                ]
            },
            "properties": {
                "p": 0.9
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.65439667653482,
                    -32.941290892085405
                ]
            },
            "properties": {
                "p": 0.001386001386
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.43597697235887,
                    -32.85897465073424
                ]
            },
            "properties": {
                "p": 0.05
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.03222682198856,
                    -29.38186752210536
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2239349944786,
                    -31.90325958442205
                ]
            },
            "properties": {
                "p": 0.0384615384615
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.76178068490503,
                    -30.650997940833037
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.7562763780458,
                    -30.47068303609528
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.12889426725917,
                    -29.199104455288055
                ]
            },
            "properties": {
                "p": 0.904761904762
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.76454108875834,
                    -30.741163047102347
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88623555779245,
                    -31.279799938252264
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.93517245223018,
                    -29.564585410876944
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.76730701489603,
                    -30.831332965245654
                ]
            },
            "properties": {
                "p": 0.30303030303
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2179656841501,
                    -32.776273428801915
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.77007847990205,
                    -30.921507476897563
                ]
            },
            "properties": {
                "p": 0.382352941176
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88914056578454,
                    -31.369991576741263
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.54746364840304,
                    -32.945264598324115
                ]
            },
            "properties": {
                "p": 0.0304054054054
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.77285550042689,
                    -31.011686363438617
                ]
            },
            "properties": {
                "p": 0.384615384615
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.02924411132688,
                    -29.29180862164273
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.88973046502113,
                    -32.606407264112406
                ]
            },
            "properties": {
                "p": 0.0327868852459
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.93227941508314,
                    -29.474507848258646
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.3291342876043,
                    -32.86275988181045
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.77563809318775,
                    -31.101869405997178
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.89205142597814,
                    -31.4601864941074
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.33981323158793,
                    -32.17103075194062
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.77842627496898,
                    -31.19205638545157
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.73989428790674,
                    -29.929876436548778
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.65916884821675,
                    -33.03145354896878
                ]
            },
            "properties": {
                "p": 0.00240673886883
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.00635898723817,
                    -31.728237665873266
                ]
            },
            "properties": {
                "p": 0.0166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4405210836993,
                    -32.949146001797246
                ]
            },
            "properties": {
                "p": 0.04375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.92939207384072,
                    -29.384438128124252
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.02626726126516,
                    -29.20175799263174
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6548420116245,
                    -30.563174619813125
                ]
            },
            "properties": {
                "p": 0.1875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.65749297231255,
                    -30.653337163815806
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.65219633341968,
                    -30.473017322928023
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.78122006262237,
                    -31.282247082432068
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.22228254005614,
                    -32.86645288015933
                ]
            },
            "properties": {
                "p": 0.129032258065
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.67285589855533,
                    -32.52274584828095
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.56275718985938,
                    -32.43567262998186
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.66281080453464,
                    -30.833677121475496
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.64692076144138,
                    -30.292719340648016
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.89370389457417,
                    -32.69659774194699
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6654777079255,
                    -30.92385409864019
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.55212646142098,
                    -33.03543129920082
                ]
            },
            "properties": {
                "p": 0.0281690140845
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.78401947306762,
                    -31.372441277322846
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.92651041170237,
                    -29.29437646477104
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.3335692053298,
                    -32.952935090353634
                ]
            },
            "properties": {
                "p": 0.031746031746
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.66814995751386,
                    -31.01403544994169
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.82933772370362,
                    -29.476992464648276
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0232962545523,
                    -29.111715848786545
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.11542195217115,
                    -32.87005363421518
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.7868245232924,
                    -31.462638750264063
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.445074508725,
                    -33.03931665266715
                ]
            },
            "properties": {
                "p": 0.0204081632653
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6735105597015,
                    -31.194410399183507
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8265516465998,
                    -29.386920077581095
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.56638972260325,
                    -32.52587240942438
                ]
            },
            "properties": {
                "p": 0.0294117647059
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.22660823631753,
                    -32.9566318521311
                ]
            },
            "properties": {
                "p": 0.0561224489796
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.55065295395815,
                    -30.56542145865945
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.89768544651687,
                    -32.78678818324653
                ]
            },
            "properties": {
                "p": 0.0625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.54811102209106,
                    -30.475261788343875
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.55575205967332,
                    -30.74575632070639
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.55830926401063,
                    -30.83593107644259
                ]
            },
            "properties": {
                "p": 0.444444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5430423245698,
                    -30.29495905716906
                ]
            },
            "properties": {
                "p": 0.571428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5567988403592,
                    -33.12559707748902
                ]
            },
            "properties": {
                "p": 0.00634249471459
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.33801321371712,
                    -33.04310959720879
                ]
            },
            "properties": {
                "p": 0.0652173913043
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8237710497192,
                    -29.296855746649108
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5608715897622,
                    -30.92611042422893
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.11963839979973,
                    -32.96023627555648
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.57002966737042,
                    -32.6160725947976
                ]
            },
            "properties": {
                "p": 0.133333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.44963727608229,
                    -33.12948637940393
                ]
            },
            "properties": {
                "p": 0.002331002331
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.72370573914628,
                    -29.389313362594084
                ]
            },
            "properties": {
                "p": 0.0162601626016
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.23094280010304,
                    -33.04681012095609
                ]
            },
            "properties": {
                "p": 0.0748299319728
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.44645882071285,
                    -30.567578373982073
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.01265991902488,
                    -32.96374834934567
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.44402065033708,
                    -30.477416425244154
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4415873340589,
                    -30.387259939889184
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.5614808146664,
                    -33.21576170905933
                ]
            },
            "properties": {
                "p": 0.00451467268623
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.3424663407297,
                    -33.13328317842276
                ]
            },
            "properties": {
                "p": 0.00945626477541
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4538026020826,
                    -30.83809482302806
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.43915885739952,
                    -30.297109135271768
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8182262320925,
                    -29.116752108989445
                ]
            },
            "properties": {
                "p": 0.454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.45626033479726,
                    -30.928276446540053
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.43673520593757,
                    -30.206964228482597
                ]
            },
            "properties": {
                "p": 0.0810810810811
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.12386349170333,
                    -33.05041821232842
                ]
            },
            "properties": {
                "p": 0.551020408163
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.45420941453483,
                    -33.21965495786477
                ]
            },
            "properties": {
                "p": 0.00437636761488
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.46119059715022,
                    -31.108652592823294
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.71835197391385,
                    -29.209187825751197
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.9056730173503,
                    -32.967168062503674
                ]
            },
            "properties": {
                "p": 0.0434782608696
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.23528625869284,
                    -33.13698746266817
                ]
            },
            "properties": {
                "p": 0.0391061452514
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.01677551245047,
                    -33.053933860034505
                ]
            },
            "properties": {
                "p": 0.219047619048
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0246982862052,
                    -32.269484988076655
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.46698622035922,
                    -32.7093138113928
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.46614068789938,
                    -31.289044477557347
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.34692861444583,
                    -33.22345560983945
                ]
            },
            "properties": {
                "p": 0.00701754385965
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.342259818843,
                    -30.569645358961566
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.33992542449514,
                    -30.479481226814208
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.71568297436562,
                    -29.119137675388032
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.34694260637775,
                    -30.749989140767156
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.33759567784927,
                    -30.389322557423235
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1280972544783,
                    -33.14059922055233
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.3352705650413,
                    -30.299169568151193
                ]
            },
            "properties": {
                "p": 0.9
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.58155642745368,
                    -31.647684231483026
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.33295007226235,
                    -30.209022476096635
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.35400199524273,
                    -31.020540335124643
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.02777660512513,
                    -32.35969790900482
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4587909529646,
                    -33.30982216370604
                ]
            },
            "properties": {
                "p": 0.00788643533123
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4711107268814,
                    -31.469450344601604
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.02089955270526,
                    -33.14411844077672
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.35873189120474,
                    -31.20092892819408
                ]
            },
            "properties": {
                "p": 0.8
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.69167484525673,
                    -32.97373036439162
                ]
            },
            "properties": {
                "p": 0.0327868852459
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.36110397297375,
                    -31.29112890631606
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.13233971483004,
                    -33.230779076046865
                ]
            },
            "properties": {
                "p": 0.0333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.23805615536114,
                    -30.571622407062712
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.24029121431465,
                    -30.66179387212695
                ]
            },
            "properties": {
                "p": 0.571428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.23582555096047,
                    -30.48145618652346
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.24253074117598,
                    -30.751970363823993
                ]
            },
            "properties": {
                "p": 0.391304347826
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2335993878108,
                    -30.391295428141206
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.24477474935364,
                    -30.842151664003673
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.23137765266318,
                    -30.301140349286086
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2470232523097,
                    -30.932337554259767
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.92148582805555,
                    -32.36226746845332
                ]
            },
            "properties": {
                "p": 0.0344827586207
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.46338192037217,
                    -33.39998777238549
                ]
            },
            "properties": {
                "p": 0.0014367816092
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.24927626356026,
                    -31.0225278159321
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.51304853515182,
                    -29.21369865407395
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6105712205582,
                    -29.031390923474703
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.58466402207014,
                    -32.976872932577336
                ]
            },
            "properties": {
                "p": 0.0243902439024
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2515337966757,
                    -31.11272223010832
                ]
            },
            "properties": {
                "p": 0.008
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0250320658075,
                    -33.234301867378726
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.81232660255165,
                    -32.27452712397512
                ]
            },
            "properties": {
                "p": 0.0512820512821
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.69546179051827,
                    -33.063926032581676
                ]
            },
            "properties": {
                "p": 0.0588235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.25379586528084,
                    -31.20292057762621
                ]
            },
            "properties": {
                "p": 0.10989010989
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.36824892607484,
                    -31.56174893051935
                ]
            },
            "properties": {
                "p": 0.388888888889
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.35588071487888,
                    -33.40379612565558
                ]
            },
            "properties": {
                "p": 0.00554938956715
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.13659089957378,
                    -33.320957554429995
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.7033831155585,
                    -32.186691137467974
                ]
            },
            "properties": {
                "p": 0.0025974025974
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2560624830553,
                    -31.29312263907546
                ]
            },
            "properties": {
                "p": 0.121212121212
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.13384803733527,
                    -30.573509512034725
                ]
            },
            "properties": {
                "p": 0.952380952381
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1359790859181,
                    -30.66368296988952
                ]
            },
            "properties": {
                "p": 0.617021276596
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1381143946669,
                    -30.75386145379065
                ]
            },
            "properties": {
                "p": 0.72641509434
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.81518900013805,
                    -32.36474523290859
                ]
            },
            "properties": {
                "p": 0.113636363636
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.91771591783032,
                    -33.23773201607821
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.70505917033626,
                    -28.75902617150853
                ]
            },
            "properties": {
                "p": 0.00813008130081
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.14025397636726,
                    -30.844044745580717
                ]
            },
            "properties": {
                "p": 0.444444444444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.12748032548808,
                    -30.303021472438928
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.25833366373377,
                    -31.383328194799876
                ]
            },
            "properties": {
                "p": 0.875
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1423978438562,
                    -30.934232626846423
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2483702777725,
                    -33.40751168243743
                ]
            },
            "properties": {
                "p": 0.013986013986
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.58834136931875,
                    -33.06707179849582
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.4679823458776,
                    -33.49015155916442
                ]
            },
            "properties": {
                "p": 0.00277008310249
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.50811820883177,
                    -29.033597327270428
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.41038943512038,
                    -29.215821328184994
                ]
            },
            "properties": {
                "p": 0.00833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.14454601002203,
                    -31.02442487892035
                ]
            },
            "properties": {
                "p": 0.015625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.02917307788226,
                    -33.32448391544641
                ]
            },
            "properties": {
                "p": 0.310344827586
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26060942110638,
                    -31.473537024899258
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.92744473407424,
                    -32.542700905069545
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6992565098557,
                    -33.154120766848685
                ]
            },
            "properties": {
                "p": 0.14
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.14669848780483,
                    -31.114621282883153
                ]
            },
            "properties": {
                "p": 0.0483870967742
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.81805722896638,
                    -32.45496418591488
                ]
            },
            "properties": {
                "p": 0.0689655172414
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.81039149642493,
                    -33.24106951141896
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1488552901967,
                    -31.204821619565397
                ]
            },
            "properties": {
                "p": 0.00813008130081
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.36037059833131,
                    -33.49396376074793
                ]
            },
            "properties": {
                "p": 0.00327153762268
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26288976901864,
                    -31.56374890923156
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.14085083563486,
                    -33.41113443112121
                ]
            },
            "properties": {
                "p": 0.0555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.30999624694002,
                    -29.30792347147655
                ]
            },
            "properties": {
                "p": 0.0740740740741
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.37062002023333,
                    -32.98288085424076
                ]
            },
            "properties": {
                "p": 0.0238095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.70888634099072,
                    -32.36713119459309
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.92174673100368,
                    -33.32791753990395
                ]
            },
            "properties": {
                "p": 0.269230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6029115139186,
                    -28.761313433822373
                ]
            },
            "properties": {
                "p": 0.015037593985
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.0296356718867,
                    -30.575306667911043
                ]
            },
            "properties": {
                "p": 0.538461538462
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.03166269736414,
                    -30.66548202355782
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.02761268666805,
                    -30.48513655565808
                ]
            },
            "properties": {
                "p": 0.866666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9304333097075,
                    -32.632918334109945
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5920262661926,
                    -33.157269729239005
                ]
            },
            "properties": {
                "p": 0.368421052632
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.03369377521466,
                    -30.755662404692245
                ]
            },
            "properties": {
                "p": 0.8
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.15318192103751,
                    -31.38523321317296
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.03572891760098,
                    -30.845847593150182
                ]
            },
            "properties": {
                "p": 0.727272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.25274959062895,
                    -33.49768307201331
                ]
            },
            "properties": {
                "p": 0.0422535211268
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.02357878879116,
                    -30.30481293165597
                ]
            },
            "properties": {
                "p": 0.75
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.40566037114164,
                    -29.035715426136992
                ]
            },
            "properties": {
                "p": 0.214285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8209313068695,
                    -32.54518376036607
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7030590272223,
                    -33.2443143429644
                ]
            },
            "properties": {
                "p": 0.266666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.03776813673443,
                    -30.936037370511478
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.03332261516212,
                    -33.41466436038701
                ]
            },
            "properties": {
                "p": 0.0740740740741
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.03981144487545,
                    -31.026231518101987
                ]
            },
            "properties": {
                "p": 0.227272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1553517757328,
                    -31.475444030527754
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.81431208515784,
                    -33.331258417069584
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.04185885433364,
                    -31.11642981699552
                ]
            },
            "properties": {
                "p": 0.0162601626016
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.38025374672145,
                    -32.01283604797783
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.043910377468,
                    -31.206632048015955
                ]
            },
            "properties": {
                "p": 0.00806451612903
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26975849529032,
                    -31.83440068261973
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.602578070304,
                    -32.369425346017444
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.9257858431618,
                    -33.418101459205076
                ]
            },
            "properties": {
                "p": 0.232558139535
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.59571873595542,
                    -33.247466500567796
                ]
            },
            "properties": {
                "p": 0.304347826087
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.0459660266873,
                    -31.296837991739174
                ]
            },
            "properties": {
                "p": 0.177419354839
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.92541926618733,
                    -30.577013869009637
                ]
            },
            "properties": {
                "p": 0.636363636364
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.92734225644523,
                    -30.667191027445682
                ]
            },
            "properties": {
                "p": 0.5625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.92350010896763,
                    -30.486841953443136
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.25713793638135,
                    -33.58785241164652
                ]
            },
            "properties": {
                "p": 0.202380952381
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.70686936666976,
                    -33.33450653650017
                ]
            },
            "properties": {
                "p": 0.514285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.3031979042788,
                    -29.037745213339093
                ]
            },
            "properties": {
                "p": 0.0275229357798
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.92926909123486,
                    -30.75737321083864
                ]
            },
            "properties": {
                "p": 0.540540540541
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.92158477333845,
                    -30.39667549839877
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.59782996052894,
                    -28.581309155200408
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.93119978209563,
                    -30.847560201017934
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9196732478976,
                    -30.306514721267213
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9331343406133,
                    -30.937751779556898
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9177655212882,
                    -30.216359839175162
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.60522986730615,
                    -32.45964910774343
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.81824074655003,
                    -33.42144571683558
                ]
            },
            "properties": {
                "p": 0.266666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9158615821985,
                    -30.126211068983295
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.1493970699659,
                    -33.59148248012575
                ]
            },
            "properties": {
                "p": 0.0028818443804
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.27436085520182,
                    -32.0148464227392
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.92983327994904,
                    -33.50828354918076
                ]
            },
            "properties": {
                "p": 0.00473933649289
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.94091148459734,
                    -31.29855959992974
                ]
            },
            "properties": {
                "p": 0.165354330709
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.71068755234865,
                    -33.424697122828775
                ]
            },
            "properties": {
                "p": 0.211764705882
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.26153534299038,
                    -33.67801947618604
                ]
            },
            "properties": {
                "p": 0.00147167034584
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.041647370808,
                    -33.59501954153681
                ]
            },
            "properties": {
                "p": 0.0115606936416
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.27029099899852,
                    -33.16616103959787
                ]
            },
            "properties": {
                "p": 0.0188679245283
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.82119902745734,
                    -30.578631109932743
                ]
            },
            "properties": {
                "p": 0.416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.8230179710023,
                    -30.66880997615158
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.81938370968433,
                    -30.488457486086745
                ]
            },
            "properties": {
                "p": 0.761904761905
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.94286555681884,
                    -31.388770835048515
                ]
            },
            "properties": {
                "p": 0.00833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.82484055119153,
                    -30.758993866824554
                ]
            },
            "properties": {
                "p": 0.542857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.8157639081801,
                    -30.30812683588649
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.822177505549,
                    -33.51163118590459
                ]
            },
            "properties": {
                "p": 0.0335570469799
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.81395940291955,
                    -30.217970244061878
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.05630660187444,
                    -31.747915703951556
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15368342264316,
                    -33.68165320230462
                ]
            },
            "properties": {
                "p": 0.00107257776189
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.61054970271385,
                    -32.64009826737417
                ]
            },
            "properties": {
                "p": 0.0185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.60312648768232,
                    -33.42785566702514
                ]
            },
            "properties": {
                "p": 0.697674418605
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.93388906711533,
                    -33.59846358483603
                ]
            },
            "properties": {
                "p": 0.0103092783505
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0526305114588,
                    -33.081413004562975
                ]
            },
            "properties": {
                "p": 0.0106382978723
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.8340083853987,
                    -31.209981041897148
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5013567076544,
                    -32.55208034792675
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.71451360850915,
                    -33.51488587712682
                ]
            },
            "properties": {
                "p": 0.296943231441
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.832486468441,
                    -32.90606381250423
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.27365318856465,
                    -33.25636683260379
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.83585301622847,
                    -31.300190488693616
                ]
            },
            "properties": {
                "p": 0.375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.28129949180075,
                    -32.28552744102154
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.72274290827932,
                    -32.818242193155406
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0458226421814,
                    -33.68519382758734
                ]
            },
            "properties": {
                "p": 0.00872885979269
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.94875145012338,
                    -31.659423294735866
                ]
            },
            "properties": {
                "p": 0.272727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.06047215448828,
                    -31.928365070720787
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.8261223872051,
                    -33.60181459927027
                ]
            },
            "properties": {
                "p": 0.0340136054422
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.71697516296274,
                    -30.580158385567074
                ]
            },
            "properties": {
                "p": 0.714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.71869004892218,
                    -30.67033886455865
                ]
            },
            "properties": {
                "p": 0.916666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.71526369546552,
                    -30.489983148479283
                ]
            },
            "properties": {
                "p": 0.357142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.61321777430413,
                    -32.73032321934036
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.49555777977577,
                    -33.43092133955521
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.83770136104064,
                    -31.390403427401548
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.72040836359514,
                    -30.76052436752941
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.72213011727393,
                    -30.850714676296864
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5039106551211,
                    -32.64230738730474
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6068418166543,
                    -33.51804761268152
                ]
            },
            "properties": {
                "p": 0.487603305785
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.15797863545393,
                    -33.771821422526756
                ]
            },
            "properties": {
                "p": 0.000351246926589
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.93795323051697,
                    -33.68864134098381
                ]
            },
            "properties": {
                "p": 0.00151515151515
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.277022296317,
                    -33.34657123815728
                ]
            },
            "properties": {
                "p": 0.00877192982456
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.71834755950135,
                    -33.60507257437678
                ]
            },
            "properties": {
                "p": 0.045584045584
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.84140923756453,
                    -31.5708389006043
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.7050661092342,
                    -29.94905397670041
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.615891304055,
                    -32.82054812175843
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0500065447759,
                    -33.775365610197916
                ]
            },
            "properties": {
                "p": 0.0006373486297
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.84326879186582,
                    -31.66106099452288
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.50646982220445,
                    -32.732534599578074
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.49916235790994,
                    -33.521116382693066
                ]
            },
            "properties": {
                "p": 0.31914893617
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.83007541667197,
                    -33.69199573173414
                ]
            },
            "properties": {
                "p": 0.0324675324675
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.61435869813545,
                    -30.671777687834584
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.94849366030286,
                    -33.17421879307868
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.39726638792263,
                    -32.644424399871596
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.61056481253217,
                    -33.60823749998328
                ]
            },
            "properties": {
                "p": 0.18064516129
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.16954261297468,
                    -33.34935542241412
                ]
            },
            "properties": {
                "p": 0.00177304964539
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.95665500137056,
                    -32.02032876614982
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.61857030872895,
                    -32.910772751127745
                ]
            },
            "properties": {
                "p": 0.8
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.50903422491905,
                    -32.82276176144925
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.60315007025065,
                    -30.04062139052877
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.06885408911464,
                    -32.28928541368214
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.50277437492645,
                    -33.611309366208054
                ]
            },
            "properties": {
                "p": 0.6
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.83403661920732,
                    -33.78217435790785
                ]
            },
            "properties": {
                "p": 0.00746268656716
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.84887005542546,
                    -31.93174205709699
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.73112508688547,
                    -33.08890731147248
                ]
            },
            "properties": {
                "p": 0.0157480314961
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.79434398003107,
                    -29.226698604904172
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6212548051572,
                    -33.000996883738935
                ]
            },
            "properties": {
                "p": 0.0655737704918
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1728080703009,
                    -33.43956103280624
                ]
            },
            "properties": {
                "p": 0.00237529691211
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.61429549906285,
                    -33.698425103710164
                ]
            },
            "properties": {
                "p": 0.00639269406393
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.51160387934505,
                    -32.91298864940984
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.73953909344314,
                    -31.752833902193423
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.72603924388451,
                    -33.78543889670444
                ]
            },
            "properties": {
                "p": 0.0027027027027
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.51760320229414,
                    -31.124114517907167
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.29295843373853,
                    -32.73668074854104
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.59523872263784,
                    -29.589987419516298
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5063938538682,
                    -33.70150006486943
                ]
            },
            "properties": {
                "p": 0.00574712643678
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.73393062455818,
                    -33.17912742858114
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9545633353422,
                    -33.35464533960222
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.05840035085177,
                    -33.9557007627011
                ]
            },
            "properties": {
                "p": 0.0066265060241
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.62394481024012,
                    -33.091220295676074
                ]
            },
            "properties": {
                "p": 0.015873015873
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.83800602017317,
                    -33.87235025221537
                ]
            },
            "properties": {
                "p": 0.0430107526882
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.51417880162862,
                    -33.0032150397428
                ]
            },
            "properties": {
                "p": 0.131782945736
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.17608026104045,
                    -33.529764805068574
                ]
            },
            "properties": {
                "p": 0.0431654676259
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.69165644422557,
                    -29.228201635929924
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.18396308242905,
                    -32.64838207665201
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.61803390009158,
                    -33.788610198452034
                ]
            },
            "properties": {
                "p": 0.0149253731343
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.28717134280924,
                    -33.61717388243814
                ]
            },
            "properties": {
                "p": 0.00438596491228
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.95019623830217,
                    -33.95915867767576
                ]
            },
            "properties": {
                "p": 0.143044619423
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.40568654236625,
                    -30.67438512108733
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.6339425265756,
                    -31.754290902165238
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.39848472362607,
                    -33.70448186324974
                ]
            },
            "properties": {
                "p": 0.0105900151286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.73674193079358,
                    -33.2693463775022
                ]
            },
            "properties": {
                "p": 0.027027027027
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6266403409473,
                    -33.18144276281866
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95760755114082,
                    -33.444856302095445
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5100208178733,
                    -33.79168825325665
                ]
            },
            "properties": {
                "p": 0.00833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.51675900798205,
                    -33.093440708524334
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.06837241590108,
                    -33.532461619959335
                ]
            },
            "properties": {
                "p": 0.0238095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0626103082227,
                    -34.04586368093271
                ]
            },
            "properties": {
                "p": 0.00634249471459
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.49213952805087,
                    -29.59131907401842
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.96662504219063,
                    -32.47149777911621
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4070975140412,
                    -33.00534071155824
                ]
            },
            "properties": {
                "p": 0.0487804878049
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.84198364503666,
                    -33.96252318889498
                ]
            },
            "properties": {
                "p": 0.151639344262
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.17935920603486,
                    -33.61996651413284
                ]
            },
            "properties": {
                "p": 0.016393442623
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.62178003956205,
                    -33.87879255861111
                ]
            },
            "properties": {
                "p": 0.0331491712707
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2905683378664,
                    -33.70737048954475
                ]
            },
            "properties": {
                "p": 0.0020942408377
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.4906682476564,
                    -29.50121285506333
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.95429416735237,
                    -34.049325060156875
                ]
            },
            "properties": {
                "p": 0.11396011396
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.62934141431822,
                    -33.271664060843804
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9686312537945,
                    -32.56173431744205
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0715402940923,
                    -33.62266604982457
                ]
            },
            "properties": {
                "p": 0.0650406504065
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.0794278838579,
                    -32.740458039318646
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.18264492621185,
                    -33.71016593473885
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.8601753217485,
                    -32.473150769800114
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.0668290045949,
                    -34.13602319240658
                ]
            },
            "properties": {
                "p": 0.00833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.84596951937039,
                    -34.05269294200163
                ]
            },
            "properties": {
                "p": 0.841193455245
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.64057647690205,
                    -32.115223871665705
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.62553394151732,
                    -33.9689719584041
                ]
            },
            "properties": {
                "p": 0.0041067761807
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6320480474625,
                    -33.3618839652284
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.74238192024836,
                    -33.449779872522925
                ]
            },
            "properties": {
                "p": 0.03125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.48627176251279,
                    -29.230942068095217
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.52193533808133,
                    -33.27388898471811
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9637148360722,
                    -33.62527248108466
                ]
            },
            "properties": {
                "p": 0.016393442623
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.95840060353254,
                    -34.13948803438943
                ]
            },
            "properties": {
                "p": 0.15503875969
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.73763659625723,
                    -34.055967315971955
                ]
            },
            "properties": {
                "p": 0.0436893203883
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.074714718375,
                    -33.71286819010727
                ]
            },
            "properties": {
                "p": 0.00729927007299
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.97265598021482,
                    -32.74220834790846
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.18593744258567,
                    -33.800362841436765
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.1922396008169,
                    -30.315916082905183
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.84996366885315,
                    -34.142859285408875
                ]
            },
            "properties": {
                "p": 0.78978978979
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.63476025756006,
                    -33.45210225125118
                ]
            },
            "properties": {
                "p": 0.027027027027
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.7452106392994,
                    -33.53999396899995
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.62929563009993,
                    -34.059148171864294
                ]
            },
            "properties": {
                "p": 0.0285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.41452392874788,
                    -33.27602114216754
                ]
            },
            "properties": {
                "p": 0.0147058823529
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.18869173142605,
                    -30.045440069113106
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.30473713814393,
                    -33.187832745429056
                ]
            },
            "properties": {
                "p": 0.0384615384615
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.96677794415533,
                    -33.71547724721606
                ]
            },
            "properties": {
                "p": 0.00757575757576
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.1875137957809,
                    -29.955294193550465
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.19517070061374,
                    -33.099546450897705
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.07789570905447,
                    -33.8030678153484
                ]
            },
            "properties": {
                "p": 0.0397727272727
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.96251557334807,
                    -34.22964737407909
                ]
            },
            "properties": {
                "p": 0.0191780821918
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.74151843325728,
                    -34.14613693496359
                ]
            },
            "properties": {
                "p": 0.542713567839
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5271330006794,
                    -33.45433168254995
                ]
            },
            "properties": {
                "p": 0.116666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.63747806186188,
                    -33.542318693994844
                ]
            },
            "properties": {
                "p": 0.714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4170095921325,
                    -33.36624546088031
                ]
            },
            "properties": {
                "p": 0.0709219858156
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.30080156583762,
                    -33.977944331752944
                ]
            },
            "properties": {
                "p": 0.0333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.85396611927018,
                    -34.23302199281126
                ]
            },
            "properties": {
                "p": 0.0628272251309
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.53766954203496,
                    -32.297074546920214
                ]
            },
            "properties": {
                "p": 0.0454545454545
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.30710741305052,
                    -33.278060526524584
                ]
            },
            "properties": {
                "p": 0.0826446280992
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6330651295527,
                    -34.14932097284381
                ]
            },
            "properties": {
                "p": 0.0970149253731
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9698473887512,
                    -33.80567949721143
                ]
            },
            "properties": {
                "p": 0.0681818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.0850707895287,
                    -30.04642119943973
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.08796504931007,
                    -33.10139651173388
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.08108328652008,
                    -33.89326469990142
                ]
            },
            "properties": {
                "p": 0.0322580645161
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.96663910341462,
                    -34.31980285275454
                ]
            },
            "properties": {
                "p": 0.00355871886121
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7454083383834,
                    -34.23630291652877
                ]
            },
            "properties": {
                "p": 0.346014492754
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1925429484159,
                    -33.98074821037315
                ]
            },
            "properties": {
                "p": 0.0606060606061
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.52460399065137,
                    -34.15241138913133
                ]
            },
            "properties": {
                "p": 0.0191082802548
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.52973987290997,
                    -33.54455037763615
                ]
            },
            "properties": {
                "p": 0.991304347826
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4195003776729,
                    -33.45646815945294
                ]
            },
            "properties": {
                "p": 0.125984251969
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.64020147769,
                    -33.63253306834831
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.30948256753396,
                    -33.368286911390726
                ]
            },
            "properties": {
                "p": 0.0166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.85797689651412,
                    -34.32318083772627
                ]
            },
            "properties": {
                "p": 0.0045871559633
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6368424642191,
                    -34.23949013501566
                ]
            },
            "properties": {
                "p": 0.164473684211
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.08427747124577,
                    -33.98345861793439
                ]
            },
            "properties": {
                "p": 0.0105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.42199630121524,
                    -33.54668901295315
                ]
            },
            "properties": {
                "p": 0.262068965517
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5323521278948,
                    -33.63476700340882
                ]
            },
            "properties": {
                "p": 0.98753117207
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.74930633680452,
                    -34.32646503417412
                ]
            },
            "properties": {
                "p": 0.262857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.31186261667534,
                    -33.45851167528422
                ]
            },
            "properties": {
                "p": 0.0245901639344
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6429305224381,
                    -33.722745149008674
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5282687304134,
                    -34.24258363834777
                ]
            },
            "properties": {
                "p": 0.0179211469534
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.0922599698156,
                    -33.281860950742
                ]
            },
            "properties": {
                "p": 0.0175438596491
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.86199602658525,
                    -34.41333559349662
                ]
            },
            "properties": {
                "p": 0.00345622119816
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.64062765854382,
                    -34.32965543187597
                ]
            },
            "properties": {
                "p": 0.362445414847
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.42449737867113,
                    -33.636907796254974
                ]
            },
            "properties": {
                "p": 0.988095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.31424757561797,
                    -33.54873459326585
                ]
            },
            "properties": {
                "p": 0.0916030534351
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.53496978231954,
                    -33.7249813345575
                ]
            },
            "properties": {
                "p": 0.833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.75321245379428,
                    -34.41662306123153
                ]
            },
            "properties": {
                "p": 0.0512820512821
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.87782270384787,
                    -30.048115190158168
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.53194109609535,
                    -34.332752020901665
                ]
            },
            "properties": {
                "p": 0.327137546468
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.31109861892818,
                    -34.24848946130987
                ]
            },
            "properties": {
                "p": 0.102564102564
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.97909393879442,
                    -34.07626889290305
                ]
            },
            "properties": {
                "p": 0.0140845070423
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.9746798279182,
                    -29.416427274888328
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.64442073707335,
                    -34.419816636746134
                ]
            },
            "properties": {
                "p": 0.227722772277
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.31663745956763,
                    -33.63895544020258
                ]
            },
            "properties": {
                "p": 0.416666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.42700362601795,
                    -33.727124284040634
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.21891888265748,
                    -32.300646715159615
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.20649392502406,
                    -33.55068711218481
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0906857447976,
                    -34.16383665019855
                ]
            },
            "properties": {
                "p": 0.00294985250737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.42324688392478,
                    -34.335754791613034
                ]
            },
            "properties": {
                "p": 0.111842105263
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6484055686289,
                    -33.90316152709284
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.20250270901766,
                    -34.251301762550696
                ]
            },
            "properties": {
                "p": 0.030612244898
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7571267147316,
                    -34.50677677086037
                ]
            },
            "properties": {
                "p": 0.031746031746
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.535621111516,
                    -34.42291631010425
                ]
            },
            "properties": {
                "p": 0.382789317507
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.9727632565542,
                    -29.23624345076596
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.31454525659692,
                    -34.33866373466387
                ]
            },
            "properties": {
                "p": 0.122699386503
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9821889270299,
                    -34.166458819957874
                ]
            },
            "properties": {
                "p": 0.0113636363636
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.31903228379304,
                    -33.72917399076974
                ]
            },
            "properties": {
                "p": 0.428571428571
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2087726001989,
                    -33.640909928858285
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.42951505929904,
                    -33.81733825080285
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.9718077945164,
                    -29.14616414642998
                ]
            },
            "properties": {
                "p": 0.285714285714
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.6591007142007,
                    -33.10787066950793
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09389987499782,
                    -34.2540203118583
                ]
            },
            "properties": {
                "p": 0.0133333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6482217244564,
                    -34.509973522774985
                ]
            },
            "properties": {
                "p": 0.186274509804
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.87176934662716,
                    -29.41722357319487
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.42681381231864,
                    -34.42592207166197
                ]
            },
            "properties": {
                "p": 0.151162790698
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.20583644877289,
                    -34.34147884100009
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.87368567355816,
                    -34.16898731474059
                ]
            },
            "properties": {
                "p": 0.0188679245283
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7610491451013,
                    -34.59692593604943
                ]
            },
            "properties": {
                "p": 0.0181818181818
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.53930880059335,
                    -34.51307627909422
                ]
            },
            "properties": {
                "p": 0.204081632653
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.21105598597114,
                    -33.731130448347514
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.32143206362605,
                    -33.81939001945311
                ]
            },
            "properties": {
                "p": 0.0869565217391
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.44168682740508,
                    -32.93006517839483
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.87005511972492,
                    -29.23703803731141
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.31799907477733,
                    -34.42883391206749
                ]
            },
            "properties": {
                "p": 0.0116959064327
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.88126475769968,
                    -33.46575600454186
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.09712069520702,
                    -34.3442001018596
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.65203064544454,
                    -34.60012586294097
                ]
            },
            "properties": {
                "p": 0.0993377483444
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.86920053184423,
                    -29.146957876791063
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.43038817907254,
                    -34.51608503016833
                ]
            },
            "properties": {
                "p": 0.0499168053245
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.7688571733214,
                    -29.41793111082171
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.20917713428497,
                    -34.431651822261216
                ]
            },
            "properties": {
                "p": 0.105263157895
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.87667437117585,
                    -34.25917612110639
                ]
            },
            "properties": {
                "p": 0.0307692307692
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.5703326695002,
                    -30.591019530835368
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5430041873451,
                    -34.603231700839856
                ]
            },
            "properties": {
                "p": 0.0423728813559
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.32146009592444,
                    -34.518999766639965
                ]
            },
            "properties": {
                "p": 0.0398009950249
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.76734530084224,
                    -29.23774405397858
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1003482263281,
                    -34.434375793475894
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.43397000746995,
                    -34.60624344009061
                ]
            },
            "properties": {
                "p": 0.0144927536232
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1052513904078,
                    -33.82321352172851
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.21252478727666,
                    -34.52182047944414
                ]
            },
            "properties": {
                "p": 0.18023255814
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.32624655176002,
                    -33.999813608176986
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.56525596628572,
                    -29.779553803603672
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.4461311503195,
                    -33.20079413487182
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.6652881087022,
                    -29.328451561003984
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.68414072857325,
                    -31.853538661742213
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5467072958894,
                    -34.69338234814122
                ]
            },
            "properties": {
                "p": 0.0117647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.76891861660954,
                    -34.777209724224676
                ]
            },
            "properties": {
                "p": 0.0062893081761
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.32492834258687,
                    -34.60916107133031
                ]
            },
            "properties": {
                "p": 0.0425531914894
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.66463399844565,
                    -29.238361498523762
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.10358248935114,
                    -34.52454715980828
                ]
            },
            "properties": {
                "p": 0.24427480916
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.55666909253887,
                    -33.37997628668014
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6596723877596,
                    -34.78041599675903
                ]
            },
            "properties": {
                "p": 0.00602409638554
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.21587942956137,
                    -34.61198458548857
                ]
            },
            "properties": {
                "p": 0.148325358852
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.56302854954345,
                    -29.41907989533002
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.99463343846077,
                    -34.52717979925229
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.55041815044513,
                    -34.78352799363245
                ]
            },
            "properties": {
                "p": 0.0112359550562
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.5582736022747,
                    -33.4702128763261
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.7728657092519,
                    -34.86734389235603
                ]
            },
            "properties": {
                "p": 0.01
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.32840383740754,
                    -34.699317598919315
                ]
            },
            "properties": {
                "p": 0.032
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.10682350535365,
                    -34.614713973787644
                ]
            },
            "properties": {
                "p": 0.245614035088
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.220236928343,
                    -34.091985041248094
                ]
            },
            "properties": {
                "p": 0.0153846153846
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6635052591085,
                    -34.870553335535575
                ]
            },
            "properties": {
                "p": 0.0175438596491
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.441156142816,
                    -34.78654570517807
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88567787100658,
                    -34.5297183895885
                ]
            },
            "properties": {
                "p": 0.0222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.21924108304353,
                    -34.702143913166196
                ]
            },
            "properties": {
                "p": 0.0568181818182
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.55344596379348,
                    -34.35639843778209
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.99776080701548,
                    -34.61734922774233
                ]
            },
            "properties": {
                "p": 0.117647058824
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.5541367753325,
                    -34.87366840978383
                ]
            },
            "properties": {
                "p": 0.00153846153846
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.01362272519467,
                    -32.93430764058655
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1100712955013,
                    -34.70487600817672
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.88869157168722,
                    -34.61989033916012
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.44476049681975,
                    -34.876689105428156
                ]
            },
            "properties": {
                "p": 0.0263157894737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.22260976971933,
                    -34.7922982350827
                ]
            },
            "properties": {
                "p": 0.0625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.00089471257456,
                    -34.70751387546076
                ]
            },
            "properties": {
                "p": 0.0833333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2248560461225,
                    -34.27239268225327
                ]
            },
            "properties": {
                "p": 0.0714285714286
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.77961603659458,
                    -34.62233730014121
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.11332588104838,
                    -34.795033035572445
                ]
            },
            "properties": {
                "p": 0.175572519084
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.3443149085058,
                    -33.562956382566526
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.00403517564982,
                    -34.79767351499585
                ]
            },
            "properties": {
                "p": 0.357142857143
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.11658728333796,
                    -34.885184828407944
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8947378921518,
                    -34.8002196651508
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6750521762574,
                    -35.1409317066866
                ]
            },
            "properties": {
                "p": 0.003663003663
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.22936833109685,
                    -34.97259095123884
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.00718221683894,
                    -34.88782791877239
                ]
            },
            "properties": {
                "p": 0.024
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1198555238027,
                    -34.9753311589549
                ]
            },
            "properties": {
                "p": 0.0583941605839
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.89887872449077,
                    -34.277734514467156
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.4556189885597,
                    -35.14708564411892
                ]
            },
            "properties": {
                "p": 0.0157480314961
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.01033585682595,
                    -34.977976859053456
                ]
            },
            "properties": {
                "p": 0.692307692308
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94492571469232,
                    -30.411983023766382
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.9008562109427,
                    -34.367937956335716
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.12313062396512,
                    -35.06547179932558
                ]
            },
            "properties": {
                "p": 0.100840336134
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.45925370863176,
                    -35.237205842939005
                ]
            },
            "properties": {
                "p": 0.00649350649351
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.23615529151306,
                    -35.1528609115673
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.01349611638165,
                    -35.0681201079429
                ]
            },
            "properties": {
                "p": 0.237704918033
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.79127690442562,
                    -34.98298470384411
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.12641260543816,
                    -35.155606521475164
                ]
            },
            "properties": {
                "p": 0.015625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.90385496838604,
                    -35.0706738075153
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.04825131253116,
                    -29.06004760158788
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.46289608015894,
                    -35.3273196709723
                ]
            },
            "properties": {
                "p": 0.00460829493088
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.79420742094928,
                    -35.07313289011969
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94563002362793,
                    -29.24020346156632
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.35293717158868,
                    -35.33026041249503
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94568345583434,
                    -29.15011989009995
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.90690676593226,
                    -35.1608136510829
                ]
            },
            "properties": {
                "p": 0.0208333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.68455371512698,
                    -35.07549734812655
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0198365777191,
                    -35.248388619178996
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.90996498312097,
                    -35.250947345809166
                ]
            },
            "properties": {
                "p": 0.0526315789474
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.02015147501237,
                    -34.81719212516625
                ]
            },
            "properties": {
                "p": 0.4375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1317242537235,
                    -34.905572801338806
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6902027167999,
                    -35.25578038159931
                ]
            },
            "properties": {
                "p": 0.0740740740741
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.2498151282361,
                    -35.51332526267842
                ]
            },
            "properties": {
                "p": 0.00301204819277
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.69033234650584,
                    -34.73181582954201
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.1396097798851,
                    -35.51608166158806
                ]
            },
            "properties": {
                "p": 0.0102040816327
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.36356248407864,
                    -35.60057003017443
                ]
            },
            "properties": {
                "p": 0.027027027027
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.35803405684564,
                    -35.17217391911839
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.69303614027984,
                    -35.34591244332239
                ]
            },
            "properties": {
                "p": 0.0222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.24824291744906,
                    -35.17416176331236
                ]
            },
            "properties": {
                "p": 0.0526315789474
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.8366489440154,
                    -32.757840630176524
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.14625022363202,
                    -35.69627778196988
                ]
            },
            "properties": {
                "p": 0.00298507462687
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.92226245502928,
                    -35.61141606667641
                ]
            },
            "properties": {
                "p": 0.0588235294118
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6987209266602,
                    -35.52615651407067
                ]
            },
            "properties": {
                "p": 0.0263157894737
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.25297940706113,
                    -35.35444901265395
                ]
            },
            "properties": {
                "p": 0.0330188679245
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.9236332676523,
                    -34.559323035336476
                ]
            },
            "properties": {
                "p": 0.0909090909091
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.36799031055097,
                    -35.53271415887701
                ]
            },
            "properties": {
                "p": 0.0217391304348
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.48085807815897,
                    -35.62073930326669
                ]
            },
            "properties": {
                "p": 0.00719424460432
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.04223980370875,
                    -35.879115556424125
                ]
            },
            "properties": {
                "p": 0.00549450549451
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.04546742076838,
                    -35.969189323629394
                ]
            },
            "properties": {
                "p": 0.0555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26251250186846,
                    -35.71494233639006
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.93778119504844,
                    -36.0618361709488
                ]
            },
            "properties": {
                "p": 0.0238095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.5971483369063,
                    -34.65149535481331
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.71303842712263,
                    -35.97663903489888
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26490839245793,
                    -35.80504742068388
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.94090473787958,
                    -36.15189579285912
                ]
            },
            "properties": {
                "p": 0.0392156862745
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.16634111792396,
                    -36.2366783527808
                ]
            },
            "properties": {
                "p": 0.00787401574803
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.26730936189205,
                    -35.89514474797151
                ]
            },
            "properties": {
                "p": 0.483870967742
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.05519148288124,
                    -36.239360457753214
                ]
            },
            "properties": {
                "p": 0.0172413793103
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.38055446624898,
                    -35.983228691987094
                ]
            },
            "properties": {
                "p": 0.478260869565
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.94403492812125,
                    -36.24194674595464
                ]
            },
            "properties": {
                "p": 0.0222222222222
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.49403464206029,
                    -36.07120485419654
                ]
            },
            "properties": {
                "p": 0.102040816327
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2697154263347,
                    -35.985234088835526
                ]
            },
            "properties": {
                "p": 0.41935483871
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.38308331079458,
                    -36.07330787139918
                ]
            },
            "properties": {
                "p": 0.727272727273
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.15887127519082,
                    -35.98714389735309
                ]
            },
            "properties": {
                "p": 0.555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.9471717870107,
                    -36.33198880033205
                ]
            },
            "properties": {
                "p": 0.14953271028
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.49668676580234,
                    -36.16127355174726
                ]
            },
            "properties": {
                "p": 0.085
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.27212660201843,
                    -36.075315213723755
                ]
            },
            "properties": {
                "p": 0.78
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8358902370253,
                    -36.334481669253144
                ]
            },
            "properties": {
                "p": 0.0175438596491
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.06170875305222,
                    -36.41943044294153
                ]
            },
            "properties": {
                "p": 0.100294985251
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.3856175328628,
                    -36.163378606136625
                ]
            },
            "properties": {
                "p": 0.802083333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.16116476571113,
                    -36.07722687497023
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.4993445349388,
                    -36.251333575853366
                ]
            },
            "properties": {
                "p": 0.571428571429
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95031533587547,
                    -36.42202172596183
                ]
            },
            "properties": {
                "p": 0.0983050847458
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.2745429052448,
                    -36.165387892951166
                ]
            },
            "properties": {
                "p": 0.798387096774
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.83891520731993,
                    -36.424516999112186
                ]
            },
            "properties": {
                "p": 0.04
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.38815714962158,
                    -36.25344066639005
                ]
            },
            "properties": {
                "p": 0.619718309859
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.0649778231537,
                    -36.5094515142047
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.1634631337248,
                    -36.167301405987374
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.7247714012048,
                    -34.38197757848387
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.7275086201675,
                    -36.4269162546982
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95346559613438,
                    -36.51204529269056
                ]
            },
            "properties": {
                "p": 0.133898305085
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.8419466362261,
                    -36.51454296881964
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.3907021783121,
                    -36.34349382222177
                ]
            },
            "properties": {
                "p": 0.185185185185
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.06825387965853,
                    -36.599462997597755
                ]
            },
            "properties": {
                "p": 0.0841121495327
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95662258929755,
                    -36.60205927024297
                ]
            },
            "properties": {
                "p": 0.280952380952
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.27939095987915,
                    -36.345506995033546
                ]
            },
            "properties": {
                "p": 0.0289855072464
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.38123135429922,
                    -35.19345423731566
                ]
            },
            "properties": {
                "p": 0.0625
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.27110287213682,
                    -35.10356367381113
                ]
            },
            "properties": {
                "p": 0.00523560209424
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.3932526362491,
                    -36.433537843568025
                ]
            },
            "properties": {
                "p": 0.0666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.28182274423867,
                    -36.43555295787512
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.95978633696717,
                    -36.692063428224344
                ]
            },
            "properties": {
                "p": 0.0536723163842
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    147.05164517519427,
                    -35.103842278206145
                ]
            },
            "properties": {
                "p": 0.111111111111
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94197701219798,
                    -35.013661071644805
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.51003242740964,
                    -36.61148233732635
                ]
            },
            "properties": {
                "p": 0.25
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.72333030539406,
                    -34.83299845997621
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.6143507945152,
                    -34.74251807209326
                ]
            },
            "properties": {
                "p": 0.953488372093
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.28670190994953,
                    -36.615616556193416
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.6139469566181,
                    -34.83271237211828
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.50508270244404,
                    -34.74213792246694
                ]
            },
            "properties": {
                "p": 0.703703703704
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.40093675979682,
                    -36.70361279821236
                ]
            },
            "properties": {
                "p": 0.030303030303
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.39644702590311,
                    -34.65146495179081
                ]
            },
            "properties": {
                "p": 0.125
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.72460044883326,
                    -36.44418764158648
                ]
            },
            "properties": {
                "p": 0.0238095238095
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.74213396096832,
                    -36.87695943456242
                ]
            },
            "properties": {
                "p": 0.0153846153846
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.83801488710515,
                    -36.5326962754365
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.63012426256114,
                    -36.879273743470165
                ]
            },
            "properties": {
                "p": 0.0192307692308
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.74507786662315,
                    -36.9669374512867
                ]
            },
            "properties": {
                "p": 0.0025
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.6329480192815,
                    -36.969253972313794
                ]
            },
            "properties": {
                "p": 0.0769230769231
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.61659307295284,
                    -36.625709356931154
                ]
            },
            "properties": {
                "p": 0.0413223140496
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.50489384057664,
                    -36.62705458121138
                ]
            },
            "properties": {
                "p": 0.0077519379845
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.75098467748978,
                    -37.14686101924364
                ]
            },
            "properties": {
                "p": 0.0188679245283
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.85190693865098,
                    -34.55748162629842
                ]
            },
            "properties": {
                "p": 0.2
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.5262367304747,
                    -37.15140613190707
                ]
            },
            "properties": {
                "p": 0.00438596491228
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.7357124516634,
                    -36.98430849662057
                ]
            },
            "properties": {
                "p": 0.0131578947368
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94136141679186,
                    -35.91515081426087
                ]
            },
            "properties": {
                "p": 0.030303030303
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.94129913806034,
                    -36.00525959145597
                ]
            },
            "properties": {
                "p": 0.00595238095238
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.64721901730428,
                    -37.41898822511356
                ]
            },
            "properties": {
                "p": 0.142857142857
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.94440991298336,
                    -35.91082561513361
                ]
            },
            "properties": {
                "p": 0.1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.5463705416837,
                    -34.448622346370044
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.72288485327044,
                    -35.90881342128104
                ]
            },
            "properties": {
                "p": 0.0555555555556
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.6135965345594,
                    -35.81755451903551
                ]
            },
            "properties": {
                "p": 0.666666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.50454253350094,
                    -35.726194740104226
                ]
            },
            "properties": {
                "p": 0.5
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.72158807434639,
                    -35.99891657731455
                ]
            },
            "properties": {
                "p": 0.047619047619
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.61218521003389,
                    -35.90766459768649
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.50295858608962,
                    -35.81631078955898
                ]
            },
            "properties": {
                "p": 0.411764705882
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.39232399628645,
                    -35.81497162255296
                ]
            },
            "properties": {
                "p": 0.4375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.28169301316376,
                    -35.81353702215864
                ]
            },
            "properties": {
                "p": 0.333333333333
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    145.06044285876862,
                    -35.81038153924622
                ]
            },
            "properties": {
                "p": 0.09375
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.9498241832677,
                    -35.80866066648626
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    143.98955185146247,
                    -34.79752125926975
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    143.98323761474458,
                    -34.977824306022484
                ]
            },
            "properties": {
                "p": 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.61046430289858,
                    -36.07318819313623
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    144.28908776151087,
                    -35.70623534391553
                ]
            },
            "properties": {
                "p": 0.4
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    143.42822251380045,
                    -35.14387539144942
                ]
            },
            "properties": {
                "p": 0.166666666667
            }
        }
    ]
}