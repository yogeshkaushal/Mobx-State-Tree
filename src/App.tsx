import React, { useEffect, useState } from 'react'
import { Routes } from './navigation/Routes'
import { Provider } from 'mobx-react';
import { setupRootStore } from './modals/setup';

const app = () => {

    const [root, setRootTree] = useState(setupRootStore())

    if(!root) return null;
    return (
        <Provider rootTree={root}>
            <Routes />
        </Provider>
    )

}

export default app;