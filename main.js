// function getInputValue(input) {
//   var inputVal = document.getElementById(input).value;
// }
//
// function hasParameters(url) {
//   url.includes('?')
// }


function addUrlDecorator() {
  var connector,
      url = document.getElementById('url-input').value;
  if ( url.includes('?') ) {
    connector = '&'
  } else {
    connector = '?'
  };
  return url + connector
}

function addUtmSource() {
  var utmSource = document.getElementById('source-input').value;
  if (utmSource != '') {
    return 'utm_source=' + utmSource.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmMedium() {
  var utmMedium = document.getElementById('medium-input').value;
  if (utmMedium != '') {
    return '&utm_medium=' + utmMedium.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmCampaign() {
  var utmCampaign = document.getElementById('campaign-input').value;
  if (utmCampaign != '') {
    return '&utm_campaign=' + utmCampaign.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmContent() {
  var utmContent = document.getElementById('content-input').value;
  if (utmContent != '') {
    return '&utm_content=' + utmContent.split(' ').join('%20')
  } else {
    return ''
  }
}

function addUtmTerm() {
  var utmTerm = document.getElementById('term-input').value;
  if (utmTerm != '') {
    return '&utm_term=' + utmTerm.split(' ').join('%20')
  } else {
    return ''
  }
}

function createUtm() {
  var utm = addUrlDecorator() + addUtmSource() + addUtmMedium() + addUtmCampaign() + addUtmContent() + addUtmTerm();
  document.getElementById("utm").value = utm;
}

function copy() {
  var utmValue = document.getElementById('utm'),
      copyButtonValue = document.getElementById('copy');
  utmValue.select();
  document.execCommand('copy');
  copyButtonValue.innerHTML = "UTM copiato";
}
