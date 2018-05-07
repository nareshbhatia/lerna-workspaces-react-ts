import * as React from 'react';

export class HomePage extends React.Component<{}, {}> {
    public render() {
        const styles = {
            content: {
                padding: 8
            }
        };

        return <div style={styles.content}>Home Page</div>;
    }
}
