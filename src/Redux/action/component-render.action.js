export const mapStateToProps = state => ({
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
});
