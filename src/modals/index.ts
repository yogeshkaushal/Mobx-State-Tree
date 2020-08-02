import { types, Instance, applySnapshot } from 'mobx-state-tree';

const EmployeeModal = types.model('employee', {
    name: types.string,
    location: types.string
})

const EmployerModel = types.model('employer', {
    name: types.string,
    location: types.string,
    employees: types.array(EmployeeModal)
})
    .actions(self => {
        function newEmployee(name: string, location: string) {
            applySnapshot(self, {
                ...self,
                employees: [{ name, location }, ...self.employees]
            })
        }
        return { newEmployee }
    })

const RootModal = types.model('Root', {
    employer: EmployerModel
})

export { RootModal }

export type Root = Instance<typeof RootModal>
export type Employer = Instance<typeof EmployerModel>