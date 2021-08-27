const {findPrimeEvent}=require("../src/libs/primes");
describe('findPrimeEvent Test',()=>{
    let e =findPrimeEvent(0,200);
    e.on('done',((data)=>{
        try{
            console.log(data);
            expect(data).toBe(30);
            console.log('callback is called');
            done();
        }
        catch(error);
    }
});
it('should return error for invalid range',done=>{
    let e=findPrimesEvent(2,10);

e.on('error',error=>{
    process.stdout.write(error.message);
});



e.on('progress', ({percent})=>{
    process.stdout.write(`\r${parseInt(percent)}%`);
});



})