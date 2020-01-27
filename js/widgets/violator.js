export function violator() {

  $('[data-violator]').not('[data-violator-loaded]').each( (key, banner) => {

    const $BANNER = $(banner);

    var campaignName = $BANNER.attr('data-violator-name');
    var campaignExpires= parseInt($BANNER.attr('data-violator-expires')) || null;
    var dismissString =  campaignName+ '_Dismissed';

    if (document.cookie.split(';').filter(function(item) {
      return item.indexOf(dismissString+'=1') >= 0
    }).length) {
      console.log('Campaign ' + campaignName + ' Dismissed');
    }
    else {
      $BANNER.attr('data-violator-loaded', '');
      $BANNER.css('display', '');

      $('[data-violator-close]', $BANNER).on('click', function () {

        $BANNER.remove();

        if (campaignExpires) {
          var expiresDate = new Date();
          expiresDate.setDate(expiresDate.getDate() + campaignExpires);
          document.cookie = dismissString + "=1; expires=" + expiresDate.toUTCString() + "; path=/";
        }
        else {
          document.cookie = dismissString + "=1; expires=; path=/";
        }

        if (dataLayer) {
          dataLayer.push({
            'event': dismissString
          });
        }
      });
    }
  });
};
