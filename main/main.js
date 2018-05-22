module.exports = function main(mileage,waittime) {

    var price=0;
    if(mileage>0&&mileage<=2)
    {
        price=parseInt(Math.round(6+waittime*0.25));
    }
    else if(mileage>2&&mileage<=8)
    {
        price=parseInt(Math.round(6+(mileage-2)*0.8+waittime*0.25));
    }
    else
    {
        price=parseInt(Math.round(6+(8-2)*0.8+(mileage-8)*0.8*(1+0.5)+waittime*0.25));
    }
    return price;
};