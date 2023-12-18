---
sidebar_position: 5
---

# Other Issues and Discussion


## Result export
Maps can be downloaded using the Image Download module down at the bottom of the right panel. Remember the right panel will show up when the first map is generated. The (L) and (R) at the end of each item's name means the left (panel) or right (panel).
<img src="/img/download.png" width="200"/>

Clicking the _KML File_ will download the water extent map of your selection.


## Oversize AOI

The maximum area of an AOI the MultiRS Flood Mapper can take is about 160,000 km<sup>2</sup>. 

We do not suggest oversize AOI, given the spatial resolution of the images used by the application (10m and 30m are too detailed for super big areas).

Additionally, chances of having images with spectral discrepancies are higher for large AOIs and those discrepancies will affect your results!

You'll know if your AOI is too large upon defining it, as the panels will fold up and you simply cannot generate a map. Like this:
![img](/img/folded.jpg)

## Other issues with size
Sometimes, you will see a text box added right below the availability chart on the left panel and asks a threshold from you. Like what is shown down below.
<img src="/img/tr.png" width="300"/>

Unlike the right panel where a fixed threslod is used for water extent extraction regardless of the AOI size, the thresholding approach of the left panel is size dependent. Specifically:
- Fixed thresholding, for areas > 50,000 km<sup>2</sup> or areas < 20 km<sup>2</sup> (estimated).
- Dynamic Bmax Otsu thresholding, otherwise.

The reason we utilize the fixed thresholding for large areas is to maintain computational efficiency, as the Bmax Otsu is far demanding than the fixed thresholding. In addition, we have to consider the memory limitations of GEE for all computations running on it.

The reason the fixed thresholding is also used for very small areas is that smaller areas often have less variability and therefore the simple fixed thresholding will be able to generate good results. 

## Note
- The default threshold is -15 for SAR and 0 for Sentinel-2 and Landsat 8 images.
- KML file can be opened with ArcGIS/ArcGIS Pro/QGIS/GEE and many libraries. It also converts easily to shapefile.