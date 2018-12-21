import React, { Component } from 'react';
import { Icon, Input, Upload, Button, Tooltip } from 'antd';

const { TextArea } = Input;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}


class RecipeForm extends Component {
    state = {
        loading: false
    };

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Загрузить фото</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <div className="recipe-form">
                <div className="btns-recipe">
                    <div className="number-recipe">{this.props.index + 1}</div>
                    {this.props.length === 1 ? <Button shape="circle"
                                                       disabled={this.props.length === 1}
                                                       onClick={this.props.deleteItem}
                                                       type="primary"
                                                       icon="delete"
                                                       size="small"/> :

                        <Tooltip title="Удалить">
                            <Button shape="circle"
                                    disabled={this.props.length === 1}
                                    onClick={this.props.deleteItem}
                                    type="primary"
                                    icon="delete"
                                    size="small"/>
                        </Tooltip>
                    }
                </div>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="recipe" /> : uploadButton}
                </Upload>
                <TextArea placeholder="Введите описание шага"
                          className="textarea"
                          onChange={this.onTextChange}
                          value={this.props.recipe}/>
            </div>
        )
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };

    onTextChange = (e) => {
        this.props.recipeChange(this.props.index, e.target.value);
    }

}

export default RecipeForm;