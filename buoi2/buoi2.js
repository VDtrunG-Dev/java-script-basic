console.log('Hello world with VDTrung')
alert('Hello ae')
function doYouLoveMe(){
    let text = 'You are marry me?'
    confirm(text)
    if(confirm === true){
        console.log('Bạn đã chọn có')
        alert('Tôi cũng yêu bạn nhiều lắm')
        return true;
    } else{
        console.log('Bạn vẫn chọn ko à')
        alert('Có vẻ bạn đang chọn sai bạn có thể chọn lại :<')
        doYouLoveMe()
    }
}
alert(doYouLoveMe())