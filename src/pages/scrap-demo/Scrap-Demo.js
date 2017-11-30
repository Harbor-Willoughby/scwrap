import React, { Component } from 'react';
import TopNav from '../../shared/top-nav';
import img1 from '../../assets/images/box-dummy-01.jpg';
import img2 from '../../assets/images/box-dummy-02.jpg';
import img3 from '../../assets/images/box-dummy-03.jpg';
import img4 from '../../assets/images/box-dummy-04.jpg';
import img5 from '../../assets/images/box-dummy-05.jpg';
import img6 from '../../assets/images/box-dummy-06.jpg';
import $ from 'jquery';

export default class ScrapDemo extends Component {
  componentDidMount() {
    // Check Scroll Events using Jquery
    this.enableScroll();
    // Grid Item Image Resize
    this.ImageResize();
  }
  ImageResize() {
      $(function() {
        // Vars.
        var $alone_item = $('.tile.alone img');
        $alone_item.each(function( index ) {
          const naturalWidth = $( this ).prop("naturalWidth");
          const naturalHeight = $( this ).prop("naturalHeight");
          const currentHeight = $( this ).prop("height");
          const ratio = naturalHeight / naturalWidth;
          var new_width = currentHeight / ratio;
          // var new_height = currentHeight * 0.5;
          $( this ).width(new_width);
          // $( this ).width(new_height);
        });
        var $not_alone_tile = $('.tile.is-vertical');
        $not_alone_tile.each(function( index ) {
            const box_img_1 = $( this ).find( ".box:nth-child(1):not(.link) img" );
            const box_img_2 = $( this ).find( ".box:nth-child(2):not(.link) img" );
            if (box_img_1.width() < box_img_2.width()) {
              box_img_1.width('100%');
              box_img_1.height('100%');
              box_img_2.height(300);
            } else if(box_img_1.width() >= box_img_2.width()) {
              box_img_2.width('100%');
              box_img_2.height('100%');
              box_img_1.height(300);
            }
        });

      });
  }
  enableScroll() {
  // Settings.
    var settings = {
      // Scroll wheel.
        scrollWheel: {
          // If true, enables scrolling via the scroll wheel.
            enabled: true,
          // Sets the scroll wheel factor. (Ideally) a value between 0 and 1 (lower = slower scroll, higher = faster scroll).
            factor: 1
        },
    };
      // Vars.
      var $window = $(window),
          $document = $('#scrap-demo'),
          $scrapWrapper = $('#scrap-demo'),
          $html = $('html'),
          $bodyHtml = $('body,html'),
          $wrapper = $('#wrapper');

      // Based on code by @miorel + @pieterv of Facebook (thanks guys :)
      // github.com/facebook/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
      var normalizeWheel = function(event) {

        var pixelStep = 10,
            lineHeight = 40,
            pageHeight = 800,
            sX = 0,
            sY = 0,
            pX = 0,
            pY = 0;

          // Legacy.
            if ('detail' in event)
              sY = event.detail;
            else if ('wheelDelta' in event)
              sY = event.wheelDelta / -120;
            else if ('wheelDeltaY' in event)
              sY = event.wheelDeltaY / -120;

            if ('wheelDeltaX' in event)
              sX = event.wheelDeltaX / -120;

          // Side scrolling on FF with DOMMouseScroll.
            if ('axis' in event
            &&  event.axis === event.HORIZONTAL_AXIS) {
              sX = sY;
              sY = 0;
            }

          // Calculate.
            pX = sX * pixelStep;
            pY = sY * pixelStep;

            if ('deltaY' in event)
              pY = event.deltaY;

            if ('deltaX' in event)
              pX = event.deltaX;

            if ((pX || pY)
            &&  event.deltaMode) {

              if (event.deltaMode == 1) {
                pX *= lineHeight;
                pY *= lineHeight;
              }
              else {
                pX *= pageHeight;
                pY *= pageHeight;
              }

            }

          // Fallback if spin cannot be determined.
            if (pX && !sX)
              sX = (pX < 1) ? -1 : 1;

            if (pY && !sY)
              sY = (pY < 1) ? -1 : 1;

          // Return.
            return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY
            };

        };

      // Wheel event.
        $scrapWrapper.on('wheel', function(event) {

          // Disable on <=small.
            // if (skel.breakpoint('small').active)
            //   return;

          // Prevent default.
            event.preventDefault();
            event.stopPropagation();

          // Stop link scroll.
            $bodyHtml.stop();

          // Calculate delta, direction.
            var n = normalizeWheel(event.originalEvent),
              x = (n.pixelX != 0 ? n.pixelX : n.pixelY),
              delta = Math.min(Math.abs(x), 150) * settings.scrollWheel.factor,
              direction = x > 0 ? 1 : -1;

          // Scroll page.
            $document.scrollLeft($document.scrollLeft() + (delta * direction));
        });
  }
  render() {
    return (
      <div id="scrap-demo">
        <TopNav/>
        <div className="scrap-wrapper">
          <div className="day">
            <div>
              <h1>DAY 1</h1>
              <span>2017 - 10 - 21</span>
            </div>
          </div>
          <div className="grid tile is-ancestor">
            <div className="box tile alone">
                 <img  src={img4} />
            </div>
            <div className="tile is-vertical">
              <div className="box tile">
                   <img  src={img4} />
              </div>
              <div className="box tile">
                   <img  src={img3} />
              </div>
            </div>
            <div className="tile is-vertical">
              <div className="box tile">
                   <img  src={img3} />
              </div>
              <div className="box tile">
                   <img  src={img4} />
              </div>
            </div>
            <div className="tile is-vertical">
              <div className="box tile link">
                <img className="image" src={img2} />
                <div className="text">
                  <h1>빨간지붕 마을</h1>
                  <a href="https://github.com/storybooks/storybook">https://github.com/storybooks/storybook</a>
                </div>
              </div>
              <div className="box tile">
                <img className="image" src={img3} />
              </div>
            </div>
            <div className="tile is-vertical">
              <div className="box tile">
                <img className="image" src={img4} />
                <img className="image" src={img5} />
              </div>
              <div className="box tile memo">
                 <div className="text">
                   <h1>오랑주리 미술관</h1>
                   <p>여행자가 된 화가의 미술관 산책 여행자가 된 화가의 미술관 산책 </p>
                   <p>‘화가가 사랑한 파리 미술관’</p>
                   <p>(01)4477-8007</p>
                   <p>12:30~19:00(금 ~21:00)</p>
                   <p>화요일 휴관</p>
                </div>
                <img className="image" src={img6} />
              </div>
            </div>
            <div className="box tile alone">
                <img className="image" src={img1} />
            </div>
            <div className="tile is-vertical">
              <div className="box tile link">
                <img className="image" src={img2} />
                <div className="text">
                  <h1>빨간지붕 마을</h1>
                  <a href="https://github.com/storybooks/storybook">https://github.com/storybooks/storybook</a>
                </div>
              </div>
              <div className="box tile">
                <img className="image" src={img3} />
              </div>
            </div>
            <div className="tile is-vertical">
              <div className="box tile">
                <img className="image" src={img4} />
                <img className="image" src={img5} />
              </div>
              <div className="box tile memo">
                 <div className="text">
                   <h1>오랑주리 미술관</h1>
                   <p>여행자가 된 화가의 미술관 산책 여행자가 된 화가의 미술관 산책 </p>
                   <p>‘화가가 사랑한 파리 미술관’</p>
                   <p>(01)4477-8007</p>
                   <p>12:30~19:00(금 ~21:00)</p>
                   <p>화요일 휴관</p>
                </div>
                <img className="image" src={img6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

