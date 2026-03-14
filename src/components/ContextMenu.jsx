

function ContextMenu({ menuPosition }) {
  if (!menuPosition.left) return;
  return (
    <div class="context-menu" style={menuPosition}>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
}

export default ContextMenu