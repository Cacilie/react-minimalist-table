import React from 'react';


export default function TableContainer(props){

    const Styles = {
        TableContainer : {
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 15,
            border: '1px solid rgba(34, 36, 38, .1)',
            borderRadius: 10,
            width: 600,
            marginTop: 10,
        },

        Container : {
            display: 'flex',
            flexDirection: 'column',
        },
        ContainerHeader : {
            display: 'flex',
            flexDirection: 'row',
        },
        HeaderTitle: {
            display: 'flex',
            
        },
        HeaderActions: {
            display: 'flex',
            alignSelf: 'flex-end',
        }
    }

    return (
        <div style={Styles.TableContainer}>
            <div style={Styles.Container}>
                <div style={Styles.ContainerHeader}>
                    <div style={Styles.HeaderTitle}>
                        <h2>Titulo</h2>
                    </div>
                    <div style={Styles.HeaderActions}>
                        <h2>Actions</h2>
                    </div>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}