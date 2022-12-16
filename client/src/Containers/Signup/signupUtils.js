export const validator = (value, toBeValidated) => {
    switch (toBeValidated) {
        case 'email':
            if (!String(value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                return true;
            } else {
                return false;
            }
        case 'text':
            return value ? false : true;
        case 'password':
            return value ? false : true;
        default:
            break;
    }
}