function changeLeastFavoriteCustomer() {
    try {
        const leastFavoriteCustomer = 'initial least favorite';
        // Attempting to reassign the const variable will cause a TypeError
        // leastFavoriteCustomer = 'new least favorite';
    } catch (error) {
        return error;
    }
}
