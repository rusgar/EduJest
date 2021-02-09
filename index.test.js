const {sum,res,mul,div,isTrue,isFalse,isUndefined,isNull,arrProvincias,arrDias,objeto,callback} = require('./index');

test('añadir 1+2 =3', () => { expect(sum(1, 2)).toBe(3);});
test('añadir 2-1=1', () => { expect(res(2, 1)).toBe(1);});
test('añadir 1*2=2', () => { expect(mul(1, 2)).toBe(2);});
test('añadir 2/2=1', () => { expect(div(2, 2)).toBe(1);});

test('añadir 1+2 =3', () => { expect(isTrue(1, 2)).toBeTruthy();});
test('añadir 1+2 =4', () => { expect(isFalse(1, 2)).toBeFalsy();});
test('añadir 0*0 =0', () => { expect(isUndefined(0, 0)).toBeUndefined();});
test('añadir 1-2 =-1', () => { expect(isNull(1, 2)).toBeNull();});



test('Madrid existe en el array', () => {expect(arrProvincias()).toContain('Madrid');});
test('Guadalajara no existe en el array', () => {expect(arrProvincias()).not.toContain('Guadalajara');})
test('Lunes existe en el array', () => {expect(arrDias()).toContain('Lunes');});
test('ChorriMiercoles no existe en el array', () => {expect(arrDias()).not.toContain('ChorriMiercoles');})
test('El array semana tiene 7 elementos', () => {expect(arrDias()).toHaveLength(7);})



test('Si la respuesta es correcta', () => {expect(objeto().responseOK).toMatch(/OK/);});
test('Si la respuesta es incorrecta', () => {expect(objeto().responseFAIL).toMatch(/FAIL/);});
test('Si la respuesta tiene una longitud', () => {expect(objeto().responseFAIL).toHaveLength(13);});
test('Comprobamos dirección de email', () => {expect(objeto().email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);})
test('Comprobamos número de teléfono', () => {expect(objeto().telefono).toMatch(/^[9|8|5][0-9]{8}$/);})


describe('Asincrono - Callback', () => 
{ test('Callback', done => {
             let callbackInterno = datos => {expect(datos).toBe('Conexion Correcta');
                 done();
                };
            callback(callbackInterno);
    })
});