import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    // className에 css 클래스 이름을 동적으로 넣어주고 싶을때 아래와 같이 설정
    return (
        <button 
            className={classNames('Button', size, color, { outline, fullWidth })}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;