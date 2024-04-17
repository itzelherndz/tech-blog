module.exports = {
    compare: (a, b) => {
        if (a === b){
            return true;
        } else {
            return false;
        }
    },
    format_date: (date) => {
        return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },
};