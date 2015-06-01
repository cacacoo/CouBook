/** @jsx React.DOM */
var React = require('react');
require('materialize');
module.exports = React.createClass({
    componentDidMount: function() {
        $('select').material_select();
    },
    render: function () {
        return (
            <section className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <select>
                                <option value="" disabled selected="true">전체</option>
                                <option value="1">Yes24</option>
                                <option value="2">알라딘</option>
                                <option value="3">인터파크</option>
                            </select>
                            <label>도서 검색 사이트 지정</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="mdi-action-account-circle prefix"></i>
                            <input id="icon_prefix" type="text" className="validate" length="50"/>
                            <label for="icon_prefix">도서 이름</label>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
});