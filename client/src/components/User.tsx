import React from 'react';
import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
	query USER_QUERY {
		allUsers {
			id
			name
		}
	}
`;
interface IUser {
	name: string;
}
export default function User() {
	const { loading, error, data } = useQuery(USER_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;
	console.log(data);
	return (
		<div>
			{data.allUsers?.map((user: IUser) => (
				<p>{user.name}</p>
			))}
		</div>
	);
}
