 function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const player = document.querySelector('#player')
const coin = document.querySelector('#coin')
const scores =document.querySelector('#score')
window.addEventListener("keyup",function(e){
	if(e.key==="ArrowDown"||e.key==="Down"){
		const currValTop = extractPos(player.style.top);
	player.style.top=`${currValTop+50}px`
	player.style.transform='scale(1,1)'
	}
	else if (e.key==="ArrowUp"||e.key==="Up"){
		const currValTop = extractPos(player.style.top);
	player.style.top=`${currValTop-50}px`
	player.style.transform='scale(-1,1)'
	}
	else if (e.key==="ArrowRight"||e.key==="Right"){
		const currValLeft = extractPos(player.style.left);
	player.style.left=`${currValLeft+50}px`
	player.style.transform='scale(1,1)'
	}
	else if (e.key==="ArrowLeft"||e.key==="Left"){
		const currValLeft = extractPos(player.style.left);
	player.style.left=`${currValLeft-50}px`
	player.style.transform='scale(-1,1)'
	}
	if(isTouching (player,coin))moveCoin()
	
	
})
const extractPos =(pos)=>{
	if(!pos)return 100;
	return parseInt(pos.slice(0,-2))
}
const moveCoin=()=>{
	const width=Math.floor(Math.random()*window.innerWidth);
	const height= Math.floor(Math.random()*window.innerHeight);
	coin.style.top=`${width}px`;
	coin.style.left=`${height}px`;
}
moveCoin();

 