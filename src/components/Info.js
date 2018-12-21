import React, { Component } from 'react';
import { Icon, Input, Alert, Tag, Tooltip } from 'antd';

const { TextArea } = Input;
const colorsTag = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#13c2c2', '#d3f261', '#fadb14', '#b37feb'];

class Info extends Component {
    state = {
        inputVisible: false,
        inputValue: '',
    };

    render() {
        const { inputVisible, inputValue } = this.state;
        return (
            <div className="inputs-section">
                <div id="header">
                    <h3>1. Название блюда</h3>
                    <Input placeholder="Введите название блюда"
                           maxLength={70}
                           onChange={this.props.onChange('name')}
                           value={this.props.name}
                           className="input"/>
                    <Alert message="Название блюда должно содержать краткую, исчерпывающую
                                информацию о наименовании блюда. Также название рецепта может
                                включать в себя упоминания особых ингредиентов, использующихся в нем.
                                Максимальная длина заголока - 70 символов."
                           className="alert"
                           showIcon
                           icon={<Icon type="question-circle"/>}>

                    </Alert>
                </div>
                <div id="info">
                    <h3>2. Краткое описание блюда</h3>
                    <TextArea rows={4}
                              value={this.props.info}
                              onChange={this.props.onChange('info')}
                              placeholder="Введите описание блюда"
                              className="textarea"/>
                    <Alert message="Краткое описание блюда должно содержать информацию о
                                способе его приготовления; продуктах, лежащих в его основе;
                                наиболее подходящем времени для подачи блюда. Иногда уместны
                                исторические сведения о блюде."
                           className="alert"
                           showIcon
                           icon={<Icon type="question-circle"/>}>

                    </Alert>
                </div>
                <div id="time">
                    <h3>3. Время приготовления</h3>
                    <div id="time-span">
                        <div className="time-input"><Input addonAfter="часов"
                                                           placeholder="00"
                                                           type="number"
                                                           onChange={this.props.onChange('hours')}
                                                           value={this.props.hours}
                                                           min={0}
                                                           max={60}/>
                        </div>
                        <div className="time-input"><Input addonAfter="минут"
                                                           placeholder="00"
                                                           type="number"
                                                           onChange={this.props.onChange('minutes')}
                                                           value={this.props.minutes}
                                                           min={0}
                                                           max={60}/>
                        </div>
                    </div>
                </div>
                <div id="tags">
                    <h3>4. Теги рецепта</h3>
                    <div className="tags-wrapper">
                        {this.props.tags.map((tag, index) => {
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag key={tag}
                                     color={colorsTag[index % 8]}
                                     closable={true}
                                     afterClose={() => this.props.removeTag(tag)}
                                     className="tag"
                                >
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                        })}
                        {inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type="text"
                                size="small"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                            />
                        )}
                        {!inputVisible && (
                            <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                            >
                                <Icon type="plus" /> Новый тег
                            </Tag>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        this.props.addTag(this.state.inputValue);
        this.setState({
            inputVisible: false,
            inputValue: ''
        })
    };

    saveInputRef = input => this.input = input;
}

export default Info;