/*
	SumAML - Utils script
	
*/

function DeleteElement(e){
	if (e)
		e.parentNode.removeChild(e);
}

function addStyleToPage(cssText){
	var HeadElement;
	HeadElement = document.getElementsByTagName('head')[0];
	if (HeadElement){
		var aStyle = document.createElement('style');
		if (aStyle){
			aStyle.type = 'text/css';
			aStyle.innerHTML = cssText;
			HeadElement.appendChild(aStyle);
		}
	}
}

function addStyleToElement(elementId,cssText){
	var Elem = document.getElementById(elementId);
	if (Elem){
		Elem.setAttribute('style',cssText);
	}
	else
	{
		elementId.setAttribute('style',cssText);
	}
}

function jsHideDiv(DivName){	
	var aDiv = document.getElementById(DivName);	
	if (aDiv.style.display == 'block') 
		{
			aDiv.style.display = 'none';
		}
	else
		{
			aDiv.style.display = 'block';
		}	
	}

function AddDonation(){	
	var aaa = document.createElement ("div");
	aaa.setAttribute ("id", "paypal");
	aaa.setAttribute ("style","position: fixed; background-color: rgba(64, 64, 64, 0.5); "+
							"left: 0px; width: 80px; height:17px; z-index: 40000; "+
							"text-align: center; color: rgb(204, 204, 204); font-weight: bold; "+
							"	-moz-border-radius-bottomleft: 6px; cursor: pointer;");	
	aaa.innerHTML = "<a id=\"donateButton\" class='fontColorRace' style='cursor:pointer;' "+
		">Donate to - SumAML Team -</a>"+
		"<div id='paypalform' style=\"display:none;\">"+
		"<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">"+
		"<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">"+
		"<input type=\"hidden\" name=\"hosted_button_id\" value=\"9366209\">"+
		"<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\" border=\"0\" name=\"submit\" target=\"_blank\" alt=\"PayPal - Donate!\">"+
		"<img alt=\"\" border=\"0\" src=\"https://www.paypal.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">"+
		"</form>"+
		"</div>";	
	document.getElementsByTagName("body")[0].appendChild(aaa);
	var listener = document.getElementById ("donateButton");
	listener.addEventListener ("click", function (){ jsHideDiv('paypalform'); }, false);	
	//alert(aaa.innerHTML);
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}