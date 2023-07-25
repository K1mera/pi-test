import { countryIns } from '../../../api/countryInstance'
import { getAllActivities, newActivity, startLoading } from './activitySlice'


export const addActivity = ( activity = {} ) => {
    return async (dispatch) => {
        dispatch( startLoading() )

        const res = await countryIns.post('/activities', activity)
        console.log(res);
        dispatch( newActivity( res.data ) )

    }
} 

export const getActivities = ( activity = {} ) => {
    return async (dispatch) => {
        dispatch( startLoading() )

        const { data } = await countryIns.get('/activities')
        
        dispatch( getAllActivities(data) )
    }
} 

// {"name": "rap", "difficulty": "2", "duration_hours": "2", "season": "summer", "countryId": "BRA"}