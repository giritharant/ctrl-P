$(document).ready(function(){


 $("#owl-example").owlCarousel({
    // Most important owl features
    items : 4,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
 });

	/*$("#navigation").sticky({
		topSpacing : 75,
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

     $('#top-nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });
//Initiat WOW JS
    new WOW().init();)*/
});
function configurerest(city,rest)
{
	var tshirt=['S','M','L','XL'];
	var paper=['A4','A5','A3','Legal'];
	var mug=['Small','medium','Large'];
	var kolkata=['8','3','1','4'];

	switch(city.value)
	{
		case 'tshirt':
			rest.options.length=0;
			for(i=0;i<tshirt.length;i++)
				createOption(rest,tshirt[i],tshirt[i]);
			break;
		case 'paper':
			rest.options.length=0;
			for(i=0;i<paper.length;i++)
				createOption(rest,paper[i],paper[i]);
			break;
		case 'mug':
			rest.options.length=0;
			for(i=0;i<mug.length;i++)
				createOption(rest,mug[i],mug[i]);
			break;
		case 'kolkata':
			rest.options.length=0;
			for(i=0;i<kolkata.length;i++)
				createOption(rest,kolkata[i],kolkata[i]);
			break;
	}

}
function createOption(ddl,text,value)
{
	var opt=document.createElement('option');
	opt.value=value;
	opt.text=text;
	ddl.options.add(opt);
}