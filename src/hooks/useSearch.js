import {useMemo} from 'react';

export const useSearch = (tasks, searchQuery) => {
    //поиск! фильтруем и уравниваем по нижнему регистру затем сравниваем >>> task.name >>>> searchQuery>>
    return useMemo(() => {
        if (searchQuery === '') return tasks;
        return tasks.filter(task =>
            task.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, tasks]);
};

