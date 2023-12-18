---
sidebar_position: 3
---

# Handling Clouds
Even though cloud & cloud removal algorithms are applied to Sentinel-2 and Landsat 8 images,  
they do not guarantee removing all clouds/cloud shadow. Additionally, some mosaicking methods, such as _taking the maximum_, will result in accumulation of cloud and thus make the cloud issue worse.

In this section, you will learn how to use the QFR module to reduce the impact of cloud/cloud shadow.

## Key steps
- Select the quantiles for both HAND and elevation.
- Click the Refine Map button (if quantiles are set on the left panel) or Refine button (if quantiles are set on the right panel) to generate a new map with QFR applied.  

Note that your setting on the left panel will only apply to the map on the left and the same with the right panel. If you want to apply the QFR to both maps, make sure you set it up for both panels. 


## Video demonstration
![video](/video/cloud.gif)



## Note
- The default quantile for HAND and elevation is 3/4 for both panels.
- The larger those quantiles are, the more non-water pixels will be changed to the water-body category. If the original map is pretty accurate, use small quantiles or skip this step.

