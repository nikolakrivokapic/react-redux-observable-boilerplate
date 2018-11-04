import changeLogoBgColor from '../../src/actions/change-logo-bg-color';
import Types from '../../src/constants/actions';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const value = '#78F';
        const expectedAction = {
            type: Types.CHANGE_LOGO_BACKGROUND_COLOR,
            value,
        };
        expect(changeLogoBgColor(value)).toEqual(expectedAction);
    });
});
