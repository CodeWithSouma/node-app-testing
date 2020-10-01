const lib = require('../lib');
const db = require('../db');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negtive', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });    
});

describe('greet', () => {
    it('should return a greeting message',() => {
        const result = lib.greet('Souma');
        expect(result).toMatch(/Souma/);
        expect(result).toContain('Souma');
    });
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
       const result = lib.getCurrencies(); 

       //too general
       expect(result).toBeDefined();
       expect(result).not.toBeNull();

       //to specific
       expect(result[0]).toBe('USD');
       expect(result[1]).toBe('AUD');
       expect(result[2]).toBe('EUR');
       expect(result.length).toBe(3);

       //proper way
       expect(result).toContain('USD');
       expect(result).toContain('AUD');
       expect(result).toContain('EUR');
       
       //ideal way
       expect(result).toEqual(expect.arrayContaining(['EUR','AUD','USD']));
    });    
});

describe('getProduct', () => {
    it('should return product with the given id', () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({id:1,price:10});
        expect(result).toMatchObject({id:1,price:10});
        expect(result).toHaveProperty('id',1);
    });
});

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        const args = [null,undefined,NaN,'',0,false];
        args.forEach( a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });

    it('should return a user if valid username is passed', () => {
        const result = lib.registerUser('Souma');
        expect(result).toMatchObject({username:'Souma'});
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    //it is a fake/mock functions
    db.getCustomerSync = function (customerId) {
        console.log('Fake reading customer...');
        return {id:customerId,points:11};
    }

    it('should apply 10% discount if customer has more than 10 points', () => {
        const order = {customerId:1,totalPrice:10};
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9)
    });
});