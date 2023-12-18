---
sidebar_position: 4
---

# Handling Constrained Water Extent Conditions

Handling constrained water extent conditions is very similar to handling cloud contamination we talked about in the previous section.  

The difference is that dealing with constrained water conditions requires one additional step to revise the hypercorrection with QFR.

The intuition of this additional revision is that image pixels in low areas are more prone to changes during the QFR, but those changes will not be possible because of the existence artificial hydraulic structures, such as levees. Therefore, it is necessary to keep the model's setting and the reality consistent.


## Define the controlled scope
There are two ways to define the scope controlled by a hydraulic structure. 
- Drawing it manually on the interface.
- Upload the GEE asset ID to make the scope file accessible to MultiRS Flood Mapper.

The scope defined by either way will be shared by both panels, so you only need to define the scope once using the left panel.

### Draw the scope manually
You will need to define the vertices of the scope by drawing on the **left** display zone.
Once finished, click on Refine w/ Levee button on the left panel or the Add Levee button on the right panel to apply the defined levee to the left or right map.  
![video](/video/levee_manual.gif)


### Upload the GEE Asset ID for the scope file
If you are using your own file for the scope and not files shared by others, you will need to put the file in the Asset folder of your own Google Earth Engine account. Obviously, you need to have a GEE account to be able to do this.


Register a GEE account [here](https://code.earthengine.google.com/register).

Learn more about how you can [upload your scope shapefile](https://developers.google.com/earth-engine/guides/table_upload) onto GEE and [managing your GEE Assets](https://developers.google.com/earth-engine/guides/asset_manager). 



![video](/video/levee_upload.gif)
