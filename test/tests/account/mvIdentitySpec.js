/**
 * Created by n1k1ch on 15.03.2015.
 */


describe('mvIdentity', function() {
    var mockWindow;
    var mockAdminUser;

    beforeEach(function(){
        module('app');
        mockAdminUser = sinon.stub({name: 'test_n1k1ch_admin', roles: ['admin', 'fighter']});
        mockWindow = sinon.stub({bootstrappedUserObject: mockAdminUser});

        module(function($provide) {
            $provide.value('$window', mockWindow);
        });
    });

    describe('currentUser', function() {
        it('should not be undefined', inject(function(mvIdentity) {
            expect(mvIdentity.currentUser).to.not.be.undefined;
        }));

        it('should have correct username', inject(function(mvIdentity) {
            console.log(mvIdentity.currentUser);
            console.log(mockAdminUser);
            expect(mvIdentity.currentUser.username).to.equal(mockAdminUser.username);
        }));

        it('should have correct roles', inject(function(mvIdentity) {
           expect(mvIdentity.currentUser.roles).to.equal(mockAdminUser.roles);
        }));
    });

    describe('isAuthenticated', function(){
        it('should be authenticated', inject(function(mvIdentity){
            expect(mvIdentity.isAuthenticated()).to.be.true;
        }));
    });

    describe('isAuthorized', function () {
        it('should be in admin role', inject(function(mvIdentity){
            expect(mvIdentity.isAuthorized('admin')).to.be.true;
        }));

        it('should not be in xyz role', inject(function(mvIdentity){
            expect(mvIdentity.isAuthorized('xyz')).to.be.false;
        }));
    });
});