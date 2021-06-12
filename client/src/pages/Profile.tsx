import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../styles/primary.css';
import '../styles/profile.css';

export const ME_QUERY = gql`
	query me {
		me {
			Profile {
				id
				bio
				location
				website
				avatar
			}
		}
	}
`;

function Profile() {
	const history = useHistory();
	const { loading, error, data } = useQuery(ME_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;
	return <h1>profile</h1>;
}

export default Profile;
