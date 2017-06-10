# MMM-MJPG-stream
Display a MJPEG Stream from a Rasperry Pi in Magic Mirror 2.

This is made to my specific needs for two cams, but with a little tweaking it might be useful for others as well.

Set to update once per minute, so it will come back up if the stream goes offline for a while without needing to reboot the mirror itself.
<<<<<<< HEAD

Config:

```
{
        module: 'MMM-MJPG-stream',
        position: 'bottom_bar',
        config: {
                header: false,
                url1: 'http://URL TO STREAMING IMAGE 1',
                url2: 'http://URL TO STREAMING IMAGE 2',
                width: '100%',
                height: '480px',
                moveUp: '60px;',
                refreshInterval: 60 // IMPORTANT: Refresh interval is to be set in seconds
        }
},
```
