// src/pages/admin/index.tsx
import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('./AdminPanel'), {
    ssr: false,
});

const AdminPage = () => {
    return <AdminPanel />;
};

export default AdminPage;
