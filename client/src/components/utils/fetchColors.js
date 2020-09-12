import { axiosWithAuth } from './axiosWithAuth'

export const fetchColor = () => {
	return axiosWithAuth().get('colors')
}