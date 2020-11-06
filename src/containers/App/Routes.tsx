import React, { lazy, Suspense } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Loader from '../../components/Loader'

type Props = { component: React.FC } & RouteComponentProps

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
)

const Routes: React.FC = () => (
	<Suspense fallback={<Loader />}>
		<Router>
			<Route component={lazy(() => import('../Home'))} path='/' />
			<Route component={lazy(() => import('../Demo'))} path='/demo' />
		</Router>
	</Suspense>
)

export default Routes
