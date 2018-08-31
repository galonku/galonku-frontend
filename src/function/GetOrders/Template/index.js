const notificationTemplate = (fullname, quantities) => {
  return `
    <List.Item>
        <List.Icon name='tint' size='large' verticalAlign='middle' />
        <List.Content>
        <List.Header as='a'>${fullname} memesan sebanyak ${quantities} galon</List.Header>
        <List.Description as='a'>Pesanan masuk .. menit yang lalu</List.Description>
        </List.Content>
    </List.Item>
`
}

export default notificationTemplate
