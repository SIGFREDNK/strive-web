// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/friends.module.scss';

const Friends: NextPage = () => {
    return (
        <AppLayout title="Today" selected="FRIENDS">
            <div>Friends</div>
        </AppLayout>
    );
};

export default Friends;
