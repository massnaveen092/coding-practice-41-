// Write your code h
import ConfigurationContext from './context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div>
          {showLeftNavbar ? (
            <div>
              <h2>Left NavBar Menu</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>Note that the development build is not optimized.</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div>
              <h1>Right NavBar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
