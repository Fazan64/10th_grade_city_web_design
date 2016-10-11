function loadPage(pageName)
{
	var pageHolderNext = document.getElementById('PageHolderNext');
	var pageHolderCurr = document.getElementById('PageHolderCurr');

	pageHolderNext.innerHTML = '<object type="text/html" data="' + pageName + '" class="page"></object>';

	pageHolderNext.id = 'PageHolderCurr';
	pageHolderCurr.id = 'PageHolderNext';
}

function switchFeedbackForm()
{
	var className = 'feedback-reversed'
	var div = document.getElementsByClassName('feedback')[0];
	if (div.classList.contains(className))
	{
		div.classList.remove(className);
	}
	else
	{
		div.classList.add(className);
	};
}

function switchParallax()
{
	var parallaxLayers = document.getElementsByClassName('parallax-group');

	for(i = 0; i < parallaxLayers.length; i++)
	{
		var className = 'parallax-group-debug';
		var div = parallaxLayers[i];
		if (div.classList.contains(className))
		{
			div.classList.remove(className);
		}
		else
		{
			div.classList.add(className);
		};
	}
}