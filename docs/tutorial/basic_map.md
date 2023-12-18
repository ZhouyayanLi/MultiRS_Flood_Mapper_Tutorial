---
sidebar_position: 1
---

# Generate a Basic Map

## Key steps
- Define Area of Interest (AOI).
- Define date range.
- Select imagery.
- Select mosaicking method.
- Define filters for postprocessing (optional).

## Video demonstration
![video](/video/first_map.gif)

## Note
Sometimes, the panel will fold up like the following. 
![img](/img/folded.jpg)

Three reasons for this are:
- Broken date range. The end date is earlier than the start date.
- No image. There are just no images of your choice within the AOI during the date range. 
- Your AOI is too big. See also the discussion about oversize AOI.


## Tips
- You can skip everything and just click Get Flood Extent button to view the map generated with default settings.
- The default imagery is SAR Ascending.
- The default postprocessing values are 5 (HAND--how vertically away any pixels are from the constant water plane, such as river channel), 20 (connectivity--how many neighboring pixels of the same category the current pixel has), and 5 (slope--how inclined the current location is).
- All selection and defined items can be changed afterwards.