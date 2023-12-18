---
sidebar_position: 2
---

# Comparing Maps

Did you noticed that some extra items popped out at the bottom of the left panel and the newly added right panel?

In this section, we will go over an example comparing maps generated on both sides of the application's interface. 

## Key steps
Setting up the right panel is pretty much the same as setting up the left one. These are the steps: 

- Define date range.
- Select imagery.
- Select mosaicking method.
- Define a threshold (default value is -15 for SAR images and 0 for others).
- Define filters for the standard postprocessing (optional).

Note we did not define the AOI here. That's because the right panel will work within the same AOI defined previously on the left panel.

## Video demonstration
![video](/video/comparison.gif)

## Note
- As shown in the video, sometimes, we need to mosaic images because any single image does not cover the entire AOI.  
- We highly recommend you mosaic images that are captured within a short period of time to avoid spectral discrepancies among images.  

**Be careful** when mosaicking images captured over a long period (a few days or even weeks), doing so may result in poor water extent maps.
