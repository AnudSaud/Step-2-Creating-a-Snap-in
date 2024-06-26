// hello-world-snapin.js

// Dummy function to simulate DevRev SDK
async function createNotification({ owner_id, message }) {
    console.log(`Notification sent to owner_id ${owner_id}: ${message}`);
}

module.exports = async function (event, context) {
    const keyword = context.inputs.keyword;
    const timelineEntry = event.timeline_entry_created;
    
    if (timelineEntry && timelineEntry.content.includes(keyword)) {
        const ownerId = timelineEntry.owner_id;
        const notificationMessage = `Keyword "${keyword}" detected in your timeline entry.`;

        await createNotification({
            owner_id: ownerId,
            message: notificationMessage,
        });

        return {
            status: 'success',
            message: 'Notification sent successfully.'
        };
    }

    return {
        status: 'ignored',
        message: 'Keyword not found in timeline entry.'
    };
};
