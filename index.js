function sum(a, b) {return a + b;}
function res(a, b) {return a - b;}
function mul(a, b) {return a * b;}
function div(a, b) {return a / b;}
function isNull() {return null;}
function isFalse() {return false;}
function isTrue() {return true;}
function isUndefined(){return undefined;}
function arrProvincias(){return[
    'Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra']
};
function arrDias(){return [
    'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
};


function objeto() {return {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'edgar@test.com',
    telefono: '985000102'}
};

function callback() {return{
        callback:setTimeout(3000),
        callback:('Conexion Correcta')
            
}
};


 module.exports = {sum,res,mul,div,isNull,isFalse,isTrue,isUndefined,arrProvincias,arrDias,objeto,callback};







