import React from 'react'
import { UserContext, ChannelContext } from '../../../App'

export default function ComponentC() {
    return (
        <div>
            <p> Component C </p>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                    return <div>User context value {user}, Channel context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
