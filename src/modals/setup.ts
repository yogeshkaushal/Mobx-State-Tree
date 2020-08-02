import { RootModal } from "."
import { onSnapshot, getSnapshot, applySnapshot } from "mobx-state-tree";

export const setupRootStore = () => {
    const rootTree = RootModal.create({
        employer: {
            name: 'kahdfs',
            location: 'qsuayjghd'
        }
    })
    // onSnapshot(rootTree, (snapshot) => {
    //     console.log('Snapshot: ', snapshot)
    // })
    // const currentRootTree = getSnapshot(rootTree)
    // applySnapshot(rootTree, {
    //     ...currentRootTree,
    //     employer: { ...currentRootTree.employer, location: 'Pur Hiran' }
    // })
    return rootTree;
}