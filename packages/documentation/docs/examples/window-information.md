## Live example

<eg-base>
  <eg-window-information />
</eg-base>

## Source code

```html
<body>
  <div id="root">
    A basic example of using a single infowindow for 3 markers.

    <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      </gmap-info-window>

      <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.0/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gmap-vue@1.0.0/dist/gmap-vue.min.js"></script>

  <script>
    Vue.use(GmapVue, {
      load: {
        key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc'
      },
    });

    document.addEventListener('DOMContentLoaded', function() {
      new Vue({
        el: '#root',
        data: {
          center: {
            lat: 47.376332,
            lng: 8.547511
          },
          infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,

          infoOptions: {
        	content: '',
            //optional: offset infowindow so it visually sits nicely on top of our marker
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
          markers: [{
            position: {
              lat: 47.376332,
              lng: 8.547511
            },
            infoText: '<strong>Marker 1</strong>'
          }, {
            position: {
              lat: 47.374592,
              lng: 8.548867
            },
            infoText: '<strong>Marker 2</strong>'
          }, {
            position: {
              lat: 47.379592,
              lng: 8.549867
            },
            infoText: '<strong>Marker 3</strong>'
          }]
        },
        methods: {
          toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoOptions.content = marker.infoText;

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }

            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;
            }
          }
        }
      });
    });
  </script>
</body>
```
