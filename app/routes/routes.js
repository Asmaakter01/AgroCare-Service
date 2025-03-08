import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import RootRoute from './subRoutes/RootRoute';

const Routes = () => {
    return (
        <Fragment>
            <RootRoute />
        </Fragment>
    );
}

const styles = StyleSheet.create({})

export default Routes;
