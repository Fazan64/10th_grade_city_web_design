window.onload = function ()
{
	var galleryItems = document.getElementsByClassName('gallery-item');

	for(i = 0; i < galleryItems.length; i++)
	{
		galleryItems[i].style.backgroundImage = 'url(../task/10/Images/' + galleryItems[i].attributes['src'].value + ')';
	}
}