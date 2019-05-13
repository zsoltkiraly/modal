# Modal v1.0.1

<br />
<a href="https://zsoltkiraly.com/developments/modal/" target="_blank">DEMO PAGE</a><br /><br />

<img src="http://zsoltkiraly.com/developments/_images/modal-001.jpg">


## SETTINGS

```html
<script type="text/javascript">
    window.addEventListener('load', function() {
        modal.app(
            config = {
                boxContainer: 'modal-container-1',
                animation: {
                    type: 'slide-in-right', //slide-in-top, slide-in-left, slide-in-right, bounce-in-top, bounce-in-left, bounce-in-right
                    duration: 300,
                },
                closeOverlay: true,
                closeX: true,
                closeEsc: true
            } 
        );
    }, false);
</script>
```

#
<br />

<b>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</b>

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
